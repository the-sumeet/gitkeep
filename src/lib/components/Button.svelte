<script lang="ts">
	let data: App.Button = $props();

	const bgColor = {
		primary: 'bg-indigo-600',
		secondary: 'bg-white'
	}[data.type];

	const hoverBgColor = {
		primary: 'hover:bg-indigo-500',
		secondary: 'hover:bg-gray-50'
	}[data.type];

	const textColor = {
		primary: 'text-white',
		secondary: 'text-gray-900'
	}[data.type];
</script>

<button
	onclick={data.onclick}
	type="button"
	class="{bgColor} {hoverBgColor} {textColor} rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
	>{data.text}</button
>
