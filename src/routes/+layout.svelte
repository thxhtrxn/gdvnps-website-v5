<script lang="ts">
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
	const queryClient = new QueryClient();

	import './app.css';

	import Navbar from '$lib/components/Navbar/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	let { children } = $props();
</script>

<QueryClientProvider>
	<ProgressBar class="text-orange-400" />

	<Navbar />
	<div aria-label="Content" class="mx-auto w-full max-w-screen-2xl px-4 lg:px-12">
		{@render children()}
	</div>
	<Footer />
</QueryClientProvider>
