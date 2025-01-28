<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let desc: string;

	let urlLocation: string;
	onMount(() => (urlLocation = window.location.pathname));
</script>

<svelte:head>
	<title>{title} | GDVNPS</title>
	<meta name="description" content={`${desc}`} />

	<meta property="og:title" content={`${title}`} />
	<meta property="og:description" content={`${desc}`} />
	<meta property="og:url" content={`https://gdvnps.site${urlLocation}`} />

	<meta name="twitter:title" content={`${title}`} />
	<meta name="twitter:description" content={`${desc}`} />
</svelte:head>
