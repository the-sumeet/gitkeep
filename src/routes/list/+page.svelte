<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';
	import { onMount } from 'svelte';
	import { b64DecodeUnicode, b64EncodeUnicode, getContent, putContent } from './utils.js';
	import Breadcrumb from './Breadcrumb.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import EasyMDE from 'easymde';

	interface Props {
		error?: string;
		files: App.RepoContent;
	}

	let { data }: { data: Props } = $props();
	$effect(() => {
		if (!data.error) {
			repoContent = data.files;
			// syncContent();
		}
	});

	let editorContent = '';
	let repoContent: App.RepoContent = $state(data.files);
	let selectedFile: any | null = $state(null);
	$effect(() => {
		if (selectedFile) {
			const easyMDE = new EasyMDE({
				toolbar: [
					'bold',
					'italic',
					'heading',
					'|',
					'quote',
					'unordered-list',
					'ordered-list',
					'|',
					'link',
					'image',
					'table',
					'|',
					'preview',
					'side-by-side',
					'fullscreen',
					'|',
					'code',
					'clean-block',
					'horizontal-rule',
					'|',
					'undo',
					'redo',
					'|',
					'guide',
					{
						name: 'save',
						action: function customFunction(editor) {
							putContent(
								fetch,
								selectedFile.path,
								b64EncodeUnicode(editorContent),
								selectedFile.sha
							).then(() => {
								// selectedFile = null;
							});
						},
						className: 'bi bi-floppy',
						title: 'Save'
					},
					{
						name: 'close',
						action: function customFunction(editor) {
							selectedFile = null;
						},
						className: 'bi bi-x-square',
						title: 'Close'
					}
				]
			});
			getFileContent(selectedFile).then((content) => {
				easyMDE.value(b64DecodeUnicode(content) || '');
			});
			easyMDE.codemirror.on('change', () => {
				editorContent = easyMDE.value();
			});
		}
	});

	async function openDir(dir: string) {
		const newUrl = new URL(page.url);
		newUrl.searchParams.set('path', dir);
		goto(newUrl);
	}

	async function getFileContent(file: any) {
		// Wait for some time
		const storedFileStr = localStorage.getItem(file.html_url);
		const storedFile = storedFileStr !== null ? JSON.parse(storedFileStr) : null;

		if (!storedFile || storedFile.sha != file.sha) {
			const res = await getContent(fetch, file.path);
			const { html_url, sha, content } = res.files as any;
			localStorage.setItem(html_url, JSON.stringify({ sha, content }));

			return content;
		}

		return storedFile.content;
	}
</script>

<div class="relative overflow-y-scroll flex-1">
	{#if data.error}
		<div class="p-2">
			<Alert title={data.error} type={'error'} />
		</div>
	{:else}
		<div class=" lg:px-20 md:px-8">
			<Breadcrumb paths={(page.url.searchParams.get('path') || '').split('/')} />
			<hr class="mt-2 w-full" />
		</div>
		<div class="mt-2 flex flex-wrap lg:px-20 md:px-8 mx-auto gap-y-2">
			{#if repoContent instanceof Array}
				{#each repoContent as file}
					<div class=" p-1 sm:w-1/2 md:w-1/3 overflow-hidden">
						<!-- Card with shadow -->
						<!-- Be sure to use this with a layout container that is full-width on mobile -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							onclick={() => {
								if (file.type === 'dir') {
									openDir(file.path);
								} else {
									selectedFile = file;
								}
							}}
							class="px-4 py-5 h-48 bg-white border hover:shadow sm:rounded-lg text-sm sm:p-6 flex flex-col"
						>
							<div class="overflow-hidden">
								<p class="font-bold text-ellipsis flex gap-1 items-center">
									{#if file.type === 'dir'}
										<i class="text-xl bi bi-folder"></i>
									{/if}
									{file.name}
								</p>

								{#if file.type === 'file'}
									{#await getFileContent(file)}
										<div class="flex flex-col gap-1 mt-2">
											<div class="animate-pulse w-full h-4 bg-gray-300 rounded"></div>
											<div class="animate-pulse w-1/3 h-4 bg-gray-300 rounded"></div>
											<div class="animate-pulse w-1/2 h-4 bg-gray-300 rounded"></div>
										</div>
									{:then value}
										<p class="mt-1 text-ellipsis whitespace-pre-wrap">
											{b64DecodeUnicode(value)}
										</p>
									{/await}
								{/if}
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	{/if}

	<!--	Preview-->
	{#if selectedFile}
		
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>


		<div class="flex flex-col justify-center fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
		<!-- <div class="z-10 top-0 bottom-0 absolute grow flex flex-col flex-auto w-full"> -->
			<div class="shadow h-full m-2 sm:m-10 md:mx-16 lg:mx-32 bg-white border  rounded-md">
				<textarea></textarea>
			</div>
		</div>
	{/if}
</div>
