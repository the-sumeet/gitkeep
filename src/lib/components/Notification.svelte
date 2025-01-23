<script lang="ts">
	import { appState } from "$lib/store.svelte";
	import { onDestroy } from "svelte";

	let data: App.Notification = $props();

	let loadedPercent = $state(100);
	// we have to reduce the `loadedPercent` 1000 times to reach 0 loading.
	let timeoutMs = data.timeoutSeconds != undefined ? data.timeoutSeconds * 1000 : 5000;
	let intervalMs = timeoutMs / 1000;
	let interval: NodeJS.Timeout;

	function removeNotification() {
		if (interval) {
			clearInterval(interval);
		}
		appState.notification = undefined;
	}

	interval = setInterval(() => {
	    if ((loadedPercent - 0.1) > 0) {
	        loadedPercent -= 0.1;
	    } else {
			removeNotification();
		}
	}, intervalMs);

	onDestroy(() => {
		removeNotification();
	});
	
</script>

<!-- Global notification live region, render this permanently at the end of the document -->
<div
	aria-live="assertive"
	class=" pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
>
	<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
		<!--
Notification panel, dynamically insert this into the live region when it needs to be displayed

Entering: "transform ease-out duration-300 transition"
From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
To: "translate-y-0 opacity-100 sm:translate-x-0"
Leaving: "transition ease-in duration-100"
From: "opacity-100"
To: "opacity-0"
-->
		<div
			class=" pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5"
		>
			<div class="p-4">
				<div class="flex items-start">
					{#if data.type == 'success'}
						<div class="shrink-0">
							<i class="text-xl text-green-400 bi bi-check-circle"></i>
						</div>
					{:else if data.type == 'error'}
						<div class="shrink-0">
							<i class="text-xl text-red-400 bi bi-check-circle"></i>
						</div>
					{/if}

					<div class="ml-3 w-0 flex-1 pt-0.5">
						<p class="text-sm font-medium text-gray-900">{data.title}</p>
						{#if data.message}
							<p class="mt-1 text-sm text-gray-500">{data.message}</p>
						{/if}

						{#if data.primaryButtonTitle || data.secondaryButtonTitle}
							<div class="mt-3 flex space-x-7">
								{#if data.primaryButtonTitle}
									<button
										onclick={data.onPrimary}
										type="button"
										class="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>{data.primaryButtonTitle}</button
									>
								{/if}
								{#if data.secondaryButtonTitle}
									<button
										onclick={data.onSecondary}
										type="button"
										class="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>{data.secondaryButtonTitle}</button
									>
								{/if}
							</div>
						{/if}
					</div>
					<div class="ml-4 flex shrink-0">
						<button
							onclick={removeNotification}
							type="button"
							class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<span class="sr-only">Close</span>
							<i class="bi bi-x-lg"></i>
						</button>
					</div>
				</div>
			</div>

			{#if data.type == "success"}
				<hr class="border-b-4 border-green-400" style="width: 100%;" />
			{:else if data.type == "error"}
				<hr class="border-b-4 border-red-400" style="width: {loadedPercent}%;" />
			{/if}
		</div>
	</div>
</div>
