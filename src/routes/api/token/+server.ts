import { json } from '@sveltejs/kit';
import { sessions } from '$lib/collections.js';
import { getUser } from '$lib/github.js';
import { COOKIE_SESSION_KEY_NAME } from '$lib/constants.js';

export async function POST({ request, cookies }) {
	let { token, repo } = await request.json();

	let user: App.GitHubUser | null = null;

	try {
		user = (await getUser(token)) as App.GitHubUser;
	} catch (error: any) {
		console.log('error getting user from token:', error);
		if (error.status < 500) {
			{
				if (error.status === 401) {
					return json({ error: 'Invalid Token' }, { status: 401 });
				} else {
					return json({ error: error.message }, { status: error.status });
				}
			}
		}
		return json({ error: 'Internal Server Rrror' }, { status: 500 });
	}

	if (!user) {
		return json({ error: 'Invalid Token' }, { status: 401 });
	}

	const toInsert = {
		token,
		repo,
		...user
	};
	const res = await sessions.insertOne(toInsert);

	// Set http only cookie
	delete toInsert.token;
	cookies.set(COOKIE_SESSION_KEY_NAME, res.insertedId.toString(), {
		path: '/',
		expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
		sameSite: 'lax',
		httpOnly: true
	});

	return json(toInsert, { status: 201 });
}
