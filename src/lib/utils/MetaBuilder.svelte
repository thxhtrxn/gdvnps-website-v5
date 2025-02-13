<script lang="ts">
	import { page } from '$app/state';

	interface MetaTagPropsType {
		title: string;
		desc: string;
	}

	const { title, desc }: MetaTagPropsType = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`${desc}`} />

	<meta property="og:title" content={`${title}`} />
	<meta property="og:description" content={`${desc}`} />
	<meta property="og:url" content={`${page.url.hostname}/${page.url.pathname}`} />

	<meta name="twitter:title" content={`${title}`} />
	<meta name="twitter:description" content={`${desc}`} />
</svelte:head>
