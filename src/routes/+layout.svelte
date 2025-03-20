<script lang="ts">
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';

	import Navbar from '$lib/components/Navbar/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	import '$lib/assets/app.css';
	let { children } = $props();
</script>

<ProgressBar class="text-orange-500" />

<Navbar />
<div aria-label="Content" class="mx-auto w-full max-w-screen-2xl px-4 lg:px-12">
	{@render children()}
</div>
<Footer />
