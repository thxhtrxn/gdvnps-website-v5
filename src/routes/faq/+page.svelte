<script lang="ts">
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
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
		<!-- hero text -->
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
</PageLayout>
