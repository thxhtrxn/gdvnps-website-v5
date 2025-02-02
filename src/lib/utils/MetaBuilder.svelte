<script lang="ts">
	import { web_domain } from '$lib';

	export let title: string;
	export let desc: string;
	export let urlLocation: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`${desc}`} />

	<meta property="og:title" content={`${title}`} />
	<meta property="og:description" content={`${desc}`} />
	<meta property="og:url" content={`${web_domain}${urlLocation}`} />

	<meta name="twitter:title" content={`${title}`} />
	<meta name="twitter:description" content={`${desc}`} />
</svelte:head>
