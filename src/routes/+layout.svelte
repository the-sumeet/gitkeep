<script lang="ts">

    import "../app.css";
    import { page } from '$app/state';
	import type { LayoutData } from "./$types";
    import type { Snippet } from "svelte";
	import Navbar from "./Navbar.svelte";
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import Sidebar from "./Sidebar.svelte";

    let { children }: { data: LayoutData, children: Snippet } = $props();
</script>

{#if page.url.pathname === '/'}
	{@render children()}
{:else}
<div class="h-screen flex flex-col">

    <Navbar />
    
    <div class="flex-1 flex overflow-y-hidden">
        <!-- <Sidebar /> -->
        {@render children()}
    </div>
</div>
{/if}

