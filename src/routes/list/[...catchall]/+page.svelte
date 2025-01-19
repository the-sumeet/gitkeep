<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';
	import { b64DecodeUnicode, b64EncodeUnicode, getContent, putContent } from './utils.js';
	import Breadcrumb from './Breadcrumb.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/state';
	import EasyMDE from 'easymde';
	import { onMount } from 'svelte';
	import { appState } from '$lib/store.svelte';

	interface Props {
		error?: string;
		files: App.RepoContent;
		path: string;
	}

	let newNotesPath = '';
	let { data }: { data: Props } = $props();
	let editorContent = '';
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
						action: function customFunction() {
							putContent(
								fetch,
								selectedFile.path,
								b64EncodeUnicode(editorContent),
								selectedFile.sha
							).then(() => {
								// selectedFile = null;
								invalidateAll();
							});
						},
						className: 'bi bi-floppy',
						title: 'Save'
					},
					{
						name: 'close',
						action: function customFunction() {
							selectedFile = null;
						},
						className: 'text-red-700 font-bold bi bi-x-square',
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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function deleteFile(path: string) {
		if (selectedFile) {
			const res = await fetch(selectedFile.url, {
				method: 'DELETE',
				headers: {
					Authorization: `token ${localStorage.getItem('token')}`
				}
			});
			if (res.ok) {
				selectedFile = null;
				invalidateAll();
			}
		}
	}

	async function openDir(dir: string) {
		goto(`/list/${dir}`);
	}

	function getBreadcrumbDirs() {
		if (page.url.pathname === '/list') {
			return [];
		}
		return page.url.pathname.replace('/list/', '').split('/');
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

	onMount(() => {
		appState.actions = [
			{
				text: 'New Note',
				onclick: () => {
					appState.modal = {
						title: 'Add New Note',
						input: {
							error: '',
							label: 'File Name',
							input: data.path.replace('/', ''),
							type: 'text',
							onchange: (e) => {
								newNotesPath = e.target.value;
							}
						},
						buttons: [
							{
								text: 'Create',
								onclick: async () => {
									putContent(fetch, newNotesPath, b64EncodeUnicode(''), null).then(() => {
										invalidateAll();
										appState.modal = null;
									});
								},
								type: 'primary'
							},
							{
								text: 'Cancel',
								onclick: () => {
									appState.modal = null;
								},
								type: 'secondary'
							}
						]
					};
				},
				type: 'primary'
			}
		];
	});
</script>

{#if data}
	<div class="relative overflow-y-scroll flex-1 mt-2">
		{#if data.error}
			<div class="p-2">
				<Alert title={data.error} type={'error'} />
			</div>
		{:else}
			<div class=" lg:px-20 md:px-8">
				<Breadcrumb paths={getBreadcrumbDirs()} />
			</div>
			<div class="mt-2 flex flex-wrap max-w-4xl md:px-16 mx-auto gap-y-2">
				{#if data.files instanceof Array}
					{#each data.files as file}
						<div class="group p-1 w-full sm:w-1/2 md:w-1/3 overflow-hidden">
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
								class="p-3 py-2 h-64 bg-white border transition-shadow duration-300 hover:shadow-md sm:rounded-lg text-sm flex flex-col justify-between"
							>
								<div class="overflow-hidden">
									<!-- Card title -->
									<p class="font-bold text-ellipsis flex gap-1 items-center">
										{#if file.type === 'dir'}
											<i class="text-xl bi bi-folder"></i>
										{/if}
										{file.name}
									</p>

									<!-- Card content -->
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

								<!-- Buttons -->
								<div class="hidden group-hover:flex">
									<!-- Delete -->
									<!-- svelte-ignore a11y_consider_explicit_label -->
									<button
										type="button"
										class="px-2 rounded-full p-1 text-gray-900 hover:bg-indigo-100 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										<i class="text-md bi bi-trash"></i>
									</button>
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

			<div
				class="flex flex-col justify-center fixed inset-0 z-10 w-screen h-screen overflow-y-hidden"
			>
				<!-- <div class="z-10 top-0 bottom-0 absolute grow flex flex-col flex-auto w-full"> -->
				<div
					class="shadow h-full m-2 sm:m-10 md:mx-16 lg:mx-32 bg-white border rounded-md overflow-y-scroll"
				>
					<textarea></textarea>
				</div>
			</div>
		{/if}
	</div>
{/if}
