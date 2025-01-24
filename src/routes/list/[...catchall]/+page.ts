import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import { getContent } from './utils';

export const load: PageLoad = async ({ url, fetch, parent }) => {

    const path = url.pathname.replace("/list", "");
    const session = (await parent() as App.ParentData).session;
    if (!session!.repo) {
        if (browser) {
            goto('/repository');
        } else {
            redirect(302, '/repository');
        }
    }

    const pathContent = await getContent(fetch, path);

    if (pathContent.status === 404) {
        const backPath = path.split('/').slice(0, -1).join('/');
        if (backPath !== "") {
            if (browser) {
                goto(`/list${backPath}`);
            } else {
                redirect(302, `/list${backPath}`);

            }
        }

    }

    return {
        ...pathContent,
        path
    }
};