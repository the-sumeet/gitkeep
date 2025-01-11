<script lang="ts">
    type PropType = {
        title: string;
        messages?: string[];
        type: 'success' | 'error' | 'warning' | 'info';
    };
    let {title, messages = [], type}: PropType = $props();

    const iconColor: string = {
        success: 'text-green-400',
        error: 'text-red-400',
        warning: 'text-yellow-400',
        info: 'text-blue-400',
    }[type];

    const titleTxtColor: string = {
        success: 'text-green-800',
        error: 'text-red-800',
        warning: 'text-yellow-800',
        info: 'text-blue-800',
    }[type];

    const textColor: string = {
        success: 'text-green-700',
        error: 'text-red-700',
        warning: 'text-yellow-700',
        info: 'text-blue-700',
    }[type];

    const bgColor: string = {
        success: 'bg-green-50',
        error: 'bg-red-50',
        warning: 'bg-yellow-50',
        info: 'bg-blue-50',
    }[type];

</script>
<div class="rounded-md {bgColor} p-4">
	<div class="flex">
		<div class="shrink-0">
			<i class="{iconColor} bi bi-x-circle-fill"></i>
		</div>
		<div class="ml-3">
            {#if title}
			<h3 class="text-sm font-medium {titleTxtColor}">{title}</h3>
            {/if}
            {#if messages && messages.length > 0}
			<div class="mt-2 text-sm {textColor}">
				<ul role="list" class="list-disc space-y-1 pl-5">
                    {#each messages as message}
					<li>{message}</li>
                    {/each}
				</ul>
			</div>
            {/if}
		</div>
	</div>
</div>
