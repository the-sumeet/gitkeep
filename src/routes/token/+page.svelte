<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';
	let inputToken = $state('');

	let user: App.GitHubUser | null = $state(null);
	let repositories: App.Repositories = $state([]);

	let error = $state('');
	let fetching = $state(false);

	function setCookieAndRedirect() {
		fetching = true;
		fetch('/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token: inputToken })
		})
			.then(async (res) => {
				const response: App.Session | App.ErrorResponse = await res.json();
				if (!res.ok) {
					error = (response as unknown as App.ErrorResponse).error;
				} else {
					localStorage.value = JSON.stringify(response);
					goto('/list');
				}
			})
			.finally(() => {
				fetching = false;
			});
	}
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->
<div class="flex flex-col w-full min-h-full justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img
			class="mx-auto h-10 w-auto"
			src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>

		<h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
			Enter your Github Access Token
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="flex flex-col bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<form class="space-y-6">
				<Input label="Access Token" {error} type="password" bind:input={inputToken} />

				<div>
					<button
						onclick={setCookieAndRedirect}
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{#if fetching}
							<i class="animate-spin text-xl bi bi-hourglass"></i>
						{:else}
							Done
						{/if}
					</button>
				</div>
				<p class="text-gray-500">
					Create <a
						target="_blank"
						href="https://github.com/settings/personal-access-tokens
"
						class="text-indigo-600 hover:text-indigo-500">GitHun personal access token</a
					> with repository content permission set to "Read and Write".
				</p>

				<p class="text-gray-500">
					It's recommanded to select only repository which you shall be using to store notes.
				</p>
			</form>
		</div>
	</div>
</div>
