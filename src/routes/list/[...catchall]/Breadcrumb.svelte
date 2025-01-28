<script lang="ts">
	type PropType = {
		paths: string[];
	};
	let { paths }: PropType = $props();

	function getPathRoute(index: number) {
		return '/list/' + paths.slice(0, index + 1).join('/');
	}
</script>

<nav class="border rounded-md p-2 shadow-md flex items-center" aria-label="Breadcrumb">
	<ol role="list" class="flex flex-wrap items-center space-x-4">
		<li>
			<div>
				<a href="/list" class="text-gray-400 hover:text-gray-500">
					<i class="text-xl bi bi-house"></i>
					<span class="sr-only">Home</span>
				</a>
			</div>
		</li>
		{#if paths.length > 0}
			{#each paths as path, i}
				<li>
					<div class="flex items-center">
						<i class="text-lg bi bi-chevron-right text-gray-500"></i>
						{#if i === paths.length - 1}
							<span class="ml-4 text-sm font-medium text-gray-500">{path}</span>
						{:else}
							<a
								href={getPathRoute(i)}
								class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{path}</a
							>
						{/if}
					</div>
				</li>
			{/each}
		{/if}
	</ol>
</nav>
