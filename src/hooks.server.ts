import { sessions } from '$lib/collections';
import { COOKIE_SESSION_KEY_NAME, SKIP_AUTH_PATHS } from '$lib/constants';
import { ObjectId } from 'mongodb';
import { connectToDb } from '$lib/db';
import { json } from '@sveltejs/kit';


connectToDb()
    .then((): void => {
        console.log('MongoDB started');
    })
    .catch((e) => {
        console.log('MongoDB failed to start');
    });


export async function handle({ event, resolve }) {

    // Get cookies
    const sessionId = event.cookies.get(COOKIE_SESSION_KEY_NAME);
    const session = sessionId ? await sessions.findOne({ _id: new ObjectId(sessionId) }) : null;

    if (!session) {
        if (event.url.pathname.startsWith('/api') && !SKIP_AUTH_PATHS.includes(event.url.pathname)) {
            return json({msg: "Unauthorized"}, { status: 401 });
        }
    } else {
        (event.locals as App.Locals).session = session;
    }
    return await resolve(event);
}