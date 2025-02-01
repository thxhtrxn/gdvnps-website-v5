<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let desc: string;
	export let urlLocation: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`${desc}`} />

	<meta property="og:title" content={`${title}`} />
	<meta property="og:description" content={`${desc}`} />
	<meta property="og:url" content={`https://gdvnps.site${urlLocation}`} />

	<meta name="twitter:title" content={`${title}`} />
	<meta name="twitter:description" content={`${desc}`} />
</svelte:head>
