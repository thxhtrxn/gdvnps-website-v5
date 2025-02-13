<script lang="ts">
	import { page } from '$app/state';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
</script>

<MetaBuilder title={`Oops... ${page.status}!`} desc={`${page.status}!`} />

<div class="mt-10 flex items-center justify-center">
	<h1
		aria-label="Error status"
		class="bg-gradient-to-tl from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-center text-7xl font-bold text-transparent lg:inline-block"
	>
		{page.status}
	</h1>
	<h1 class="mx-2 text-5xl select-none">|</h1>
	<p>{page.error?.message}</p>
</div>
