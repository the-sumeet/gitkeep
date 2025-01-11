import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getContent } from './utils';

export const load: PageLoad = async ({ url, fetch, parent }) => {

    const path = url.searchParams.get('path') || '';

    const session = (await parent() as App.ParentData).session;
    if (!session!.repo) {
        if (browser) {
            goto('/repository');
        } else {
            redirect(302, '/repository');
        }
    }

    return {
        ...await getContent(fetch, path),
        path
    }
};