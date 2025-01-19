<script>
    let {input = $bindable(), onchange, error = 'dfe', label = '', type='text' } = $props();
</script>

<div>
    {#if label}
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-sm/6 font-medium text-gray-900">{label}</label>
    {/if}
    <div class="mt-2">
        <input
            onchange={onchange}
            bind:value={input}
            type={type}
            class="{error != '' ? 'text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600'} block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1  focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
        />
    </div>
    {#if error}
    <p class="mt-2 text-sm text-red-600" id="email-error">{error}</p>
    {/if}
</div>