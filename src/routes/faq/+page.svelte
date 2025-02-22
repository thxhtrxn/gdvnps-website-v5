<script lang="ts">
	import { marked } from 'marked';
	import { info, ingame } from '$lib/contents';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
	import FaqContentLayout from '$lib/layouts/FAQContentLayout.svelte';
</script>

<MetaBuilder
	title="Các Câu Hỏi Thường Gặp"
	desc="Trang trả lời các câu hỏi thường gặp (FAQ) liên quan đến GDVNPS"
/>

{#snippet headerFAQSectionText(text: string)}
	<h2 class="mt-5 text-left text-2xl font-semibold text-yellow-300">{text}</h2>
{/snippet}

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
			{@render headerFAQSectionText('Về GDVNPS')}
			{#each info as infoIndex}
				<FaqContentLayout id={`#${infoIndex.idHash}`}>
					{@html marked(infoIndex.content)}
				</FaqContentLayout>
			{/each}
			{@render headerFAQSectionText('Thông tin trong GDVNPS')}
			{#each ingame as ingameIndex}
				<FaqContentLayout id={`#${ingameIndex.idHash}`}>
					{@html marked(ingameIndex.content)}
				</FaqContentLayout>
			{/each}
		</div>
	</section>
</PageLayout>
