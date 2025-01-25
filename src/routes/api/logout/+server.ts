import { COOKIE_SESSION_KEY_NAME } from "$lib/constants";
import { json } from "@sveltejs/kit";

export async function POST({ cookies}) {
    cookies.delete(COOKIE_SESSION_KEY_NAME, { path: '/' });
    return json({ message: 'logged out' }, { status: 200 });
}