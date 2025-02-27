<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';

	let { data } = $props();
</script>

<MetaBuilder
	title="Các Câu Hỏi Thường Gặp"
	desc="Trang trả lời các câu hỏi thường gặp (FAQ) liên quan đến GDVNPS"
/>

<BlurLightFilter />
<PageLayout>
	<section
		class="mx-auto mt-14 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<h1
			class="w-full text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold lg:text-[2.81rem]/[1.2]"
		>
			<span class="text-slate-300">Các câu hỏi</span>
			<span
				class="bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
				>thường gặp</span
			>
		</h1>
	</section>
	<section class="flex items-center justify-center">
		<div class="flex w-full max-w-2xl flex-col flex-nowrap items-stretch gap-4">
			<!-- {#each faqs as { category, questions }}
				<h2 class="mt-5 text-2xl font-bold text-orange-400">{category}</h2>
				{#each questions as { hashLink, question, answer }}
					<article id={hashLink}>
						<h3>{question}</h3>
						<div class="markdown leading-[1.72]"><SvelteMarkdown source={answer} /></div>
					</article>
				{/each}
			{/each} -->
			{#each data.summaries as { category, questions }}
				<h2 class="mt-5 text-2xl font-bold text-orange-400">{category}</h2>
				{#each questions as { hashLink, question, answer }}
					<article id={hashLink}>
						<h3>{question}</h3>
						<div class="markdown leading-[1.72]"><SvelteMarkdown source={answer} /></div>
					</article>
				{/each}
			{/each}
		</div>
	</section>
</PageLayout>

<style lang="scss">
	@reference "$lib/assets/app.css";

	* {
		@apply scroll-smooth;
	}

	article {
		h3 {
			@apply mb-1 text-xl font-semibold text-orange-400;
		}

		@apply rounded-xl bg-[#1f1e33]/50 p-5;
	}
	.markdown {
		@apply mt-2.5 border-l-4 border-amber-600 pl-5;
	}
</style>
