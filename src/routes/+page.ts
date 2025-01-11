import type { PageLoad } from './$types';
import { page } from '$app/state';
import { state } from '$lib/store.svelte';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';



export const load: PageLoad = async ({parent}) => {

    const { session } = await parent() as App.ParentData;

    return {};


}
