<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';
	let inputToken = $state('');
	let selectedRepoName = $state('');

    let user: App.GitHubUser | null = $state(null);
    let repositories: App.Repositories = $state([]);
    
	let error = $state('');
	let fetching = $state(false);

    function setCookieAndRedirect() {
        // localStorage.setItem('storageRepo', selectedRepoName);
        fetch('/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: inputToken, repo: selectedRepoName }),
        }).then(async (res) => {
			const response: App.Session = await res.json();
			localStorage.value = JSON.stringify(response);
            goto('/list');
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
<div class="flex w-full overflow-y-scroll min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
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
		<div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<form class="space-y-6">
				<Input label="Access Token" {error} type="text" bind:input={inputToken} />

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

                {#if user}
				{#if repositories.length > 0}
					<div class="sm:col-span-3">
						<label for="country" class="block text-sm/6 font-medium text-gray-900"
							>Hello <span class="font-bold">knjjn</span>, please select a repository to use as storage.</label
						>
						<div class="mt-2 grid grid-cols-1">
							<select
                                bind:value={selectedRepoName}
								class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							>   
                                <option value=''>Select Repository</option>
                                {#each repositories as repo}
                                    <option value={repo.name}>{repo.name}</option>
                                {/each}
							</select>
                            <i class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 bi bi-chevron-down"></i>
						
						</div>
					</div>
				{/if}
                {/if}

                {#if user && selectedRepoName && repositories.length > 0}
                <div>
					<button
						onclick={setCookieAndRedirect}
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
                    Use '{selectedRepoName}' for Storage
					</button>
				</div>
                {/if}
			</form>
		</div>
	</div>
</div>
