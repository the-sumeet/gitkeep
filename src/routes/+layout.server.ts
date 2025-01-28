import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { SKIP_AUTH_PATHS } from '$lib/constants';
import { parseObjId } from '$lib/db';

export const load: LayoutServerLoad = async ({ url, locals }) => {
	const session = locals.session;
	if (!session && !SKIP_AUTH_PATHS.includes(url.pathname)) {
		throw redirect(307, '/token');
	} else if (session && url.pathname === '/') {
		throw redirect(307, '/list');
	}

	return {
		session: parseObjId(session) as App.Session | null
	};
};
