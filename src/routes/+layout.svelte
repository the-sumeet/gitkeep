<script lang="ts">

    import "../app.css";
    import { page } from '$app/state';
	import type { LayoutData } from "./$types";
    import type { Snippet } from "svelte";
	import Navbar from "./Navbar.svelte";
    import 'bootstrap-icons/font/bootstrap-icons.css';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
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
<div class="h-screen flex flex-col">

    <Navbar avatar={avatar} />
    
    <div class="flex-1 flex overflow-y-hidden">
        <!-- <Sidebar /> -->
        {@render children()}
    </div>
</div>
{/if}

