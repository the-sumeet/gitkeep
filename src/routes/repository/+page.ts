import type { PageLoad } from './$types';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/repositories');
	let repos: App.Repositories = [];

	if (res.ok) {
		repos = await res.json();
	} else if (res.status === 401) {
		if (browser) {
			goto('/token');
		} else {
			redirect(302, '/token');
		}
	} else {
		console.error(res.json());
	}

	return {
		repos
	};
};
