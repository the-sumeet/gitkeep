<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import Navbar from './Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import Modal from '$lib/components/Modal.svelte';
	import { appState } from '$lib/store.svelte';
	import Notification from '$lib/components/Notification.svelte';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	// svelte-ignore non_reactive_update
	let avatar: string | null;
	let session = data.session;
	if (session) {
		avatar = session.avatar_url;
	}
</script>

{#if page.url.pathname === '/'}
	{@render children()}
{:else}
	<div class="relative z-10 h-screen flex flex-col">
		<Navbar {avatar} />

		<div class="flex-1 flex overflow-y-hidden">
			<!-- <Sidebar /> -->
			{@render children()}
		</div>

		{#if appState.notification}
		<Notification {...appState.notification} />
		{/if}
		
		{#if appState.modal}
			<Modal
				title={appState.modal.title}
				message={appState.modal.message}
				type={appState.modal.type}
				buttons={appState.modal.buttons}
				input={appState.modal.input}
			/>
		{/if}
	</div>
{/if}


<svelte:head>
    <title>MarkBook</title> 
</svelte:head>
