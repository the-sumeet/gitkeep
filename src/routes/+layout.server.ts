import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { SKIP_AUTH_PATHS } from '$lib/constants';
import { parseObjId } from '$lib/db';

export const load: LayoutServerLoad = async ({cookies, url, locals}) => {

	const session = locals.session;
	if (!session && !SKIP_AUTH_PATHS.includes(url.pathname) ) {
		throw redirect(307, '/token');
	}

	return {
		session: parseObjId(session) as App.Session | null
	};
}; 