<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';
	import { onMount } from 'svelte';
	import { b64DecodeUnicode, getContent } from './utils.js';
	import Breadcrumb from './Breadcrumb.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import EasyMDE from 'easymde';

	interface Props {
		error?: string;
		files: App.RepoContent;
	}
	let { data }: { data: Props } = $props();

	async function openDir(dir: string) {
		const newUrl = new URL(page.url);
		newUrl.searchParams.set('path', dir);
		goto(newUrl);
	}

	async function syncContent() {
		if (!data.error && data.files instanceof Array) {
			for (let i = 0, len = data.files.length; i < len; i++) {
				const html_url = data.files[i].html_url;

				if (html_url) {
					if (data.files[i].type == 'file') {
						const storedFileStr = localStorage.getItem(html_url);
						const storesFile = storedFileStr !== null ? JSON.parse(storedFileStr) : null;
						if (!storesFile || storesFile.sha != data.files[i].sha) {
							const res = await getContent(fetch, data.files[i].path);
							const { sha, content } = res.files;
							data.files = [
								...data.files.slice(0, i),
								{ ...data.files[i], content },
								...data.files.slice(i + 1)
							];
							localStorage.setItem(html_url, JSON.stringify({ sha, content }));
						} else {
							data.files = [
								...data.files.slice(0, i),
								{ ...data.files[i], content: storesFile.content },
								...data.files.slice(i + 1)
							];
						}
					}
				}
			}
		}
	}

	onMount(async () => {
		const easyMDE = new EasyMDE({});
		await syncContent();
	});
</script>

<div class="relative overflow-y-scroll flex-1">
	<textarea id=""></textarea>
</div>
