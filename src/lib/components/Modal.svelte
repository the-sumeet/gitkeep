<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	type PropData = {
		type: 'success' | 'error' | 'warning' | 'info';
		title: string;
		message: string;
		buttons?: App.Button[];
		input?: App.Input;
	};

	let { type, title, message, buttons, input }: PropData = $props();
</script>

<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

<div class="fixed inset-0 z-15 w-screen overflow-y-auto">
	<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
		<!--
					Modal panel, show/hide based on modal state.

					Entering: "ease-out duration-300"
						From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						To: "opacity-100 translate-y-0 sm:scale-100"
					Leaving: "ease-in duration-200"
						From: "opacity-100 translate-y-0 sm:scale-100"
						To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				-->
		<div
			class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
		>
			<div>
				{#if type === 'success'}
					<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
						<i class="text-green-600 bi bi-check2"></i>
					</div>
				{:else if type === 'error'}
					<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-red-100">
						<i class="text-red-600 bi bi-x-circle"></i>
					</div>
				{:else if type === 'warning'}
					<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-yellow-100">
						<i class="text-yellow-600 bi bi-exclamation-triangle"></i>
					</div>
				{:else if type === 'info'}
					<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-100">
						<i
							class="text-blue-
						600 bi bi-info-circle"
						></i>
					</div>
				{/if}
				<div class="mt-3 text-center sm:mt-5">
					{#if title}
						<h3 class="text-base font-semibold text-gray-900" id="modal-title">
							{title}
						</h3>
					{/if}

					{#if message}
						<div class="mt-2">
							<p class="text-sm text-gray-500">
								{message}
							</p>
						</div>
					{/if}

					{#if input}
						<div class="mt-4 text-start">
							<Input input={input.input} onchange={input.onchange} error={input.error} label={input.label} type={input.type} />
						</div>
					{/if}
				</div>
			</div>
			{#if buttons}
				<div class="flex items-center gap-x-2 mt-5 sm:mt-6">
					{#each buttons as button}
						{#if button.type === 'primary'}
							<button
								onclick={button.onclick}
								type="button"
								class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>{button.text}</button
							>
						{:else if button.type === 'secondary'}
							<button
								onclick={button.onclick}
								type="button"
								class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
								>{button.text}</button
							>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
