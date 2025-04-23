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
	<link rel="canonical" href={`https://gdvnps.site${page.url.pathname}`} />

	<meta property="og:title" content={`${title}`} />
	<meta property="og:description" content={`${desc}`} />
	<meta property="og:url" content={`https://gdvnps.site${page.url.pathname}`} />

	<meta name="twitter:title" content={`${title}`} />
	<meta name="twitter:description" content={`${desc}`} />
</svelte:head>
