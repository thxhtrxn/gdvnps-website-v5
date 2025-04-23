<script lang="ts">
	import { onMount } from 'svelte';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';

	onMount(() => {
		document.documentElement.style.scrollBehavior = 'smooth';
	});
</script>

<MetaBuilder
	title="Brand"
	desc="GDVNPS là một trong những server GDPS dành cho người Việt đề cao về chất lượng và trải nghiệm của mọi người."
/>

<BlurLightFilter />
<PageLayout>
	<section
		class="mx-auto mt-14 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<h1
			class="w-full bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold text-transparent lg:text-[2.81rem]/[1.2]"
		>
			Brand
		</h1>
	</section>
	<section class="mt-16 w-full text-left text-slate-300 lg:px-16">
		<h2 class="text-3xl/[1.2] font-bold">
			Đây là <span
				class="bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
				>GDVNPS</span
			>
		</h2>
		<p class="font-main/[1.25] mt-2.5 leading-[1.75] tracking-wide">
			GDVNPS là một trong những server GDPS dành cho cộng đồng người Việt. Nó đề cao về chất lượng
			và trải nghiệm cho người chơi. Cộng đồng GDVNPS mong muốn mang tới những điều mang tính sáng
			tạo đậm chất tinh thần của người Việt. Hãy cùng nhau tạo ra những thứ tuyệt vời.
		</p>
	</section>
	<section class="mt-16 w-full text-left text-slate-300 lg:px-16" id="download-logo">
		<h2 class="text-3xl/[1.2] font-bold">Tải xuống assets brand</h2>
		<div class="mt-14 flex items-center justify-center gap-4">
			<img
				class="pointer-events-none select-none"
				src="/gdvnps-brand/gdvnps-logo-rounded.svg"
				alt=""
				width="80"
			/>
			<img
				class="pointer-events-none select-none"
				src="/gdvnps-brand/gdvnps-logo-remove-bg.svg"
				alt=""
				width="80"
			/>
			<div></div>
		</div>
	</section>
	<div class="flex items-center justify-center">
		<ButtonLink
			href="/gdvnps-brand/gdvnps-brand-all-assets.zip"
			className="text-slate-200 inline-block px-4 py-3 transition-all duration-300 mt-3.5"
			><div class="flex h-full w-full items-center px-2 py-1.5">
				<span>
					<Icon icon="download" size={25} />
				</span>
				<span class="font-medium">Tải xuống tất cả</span>
			</div></ButtonLink
		>
	</div>
</PageLayout>
