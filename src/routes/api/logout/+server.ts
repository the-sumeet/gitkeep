import { sessions } from '$lib/collections';
import { COOKIE_SESSION_KEY_NAME } from '$lib/constants';
import { json } from '@sveltejs/kit';

export async function POST({ cookies, locals }) {
	const userSession = (locals as App.Locals).session;
	if (userSession) {
		await sessions.deleteOne({ _id: userSession!._id });
	}

	cookies.delete(COOKIE_SESSION_KEY_NAME, { path: '/' });

	return json({ message: 'logged out' }, { status: 200 });
}
