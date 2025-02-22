<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import type { KnownIcon } from '$lib';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Image from '$lib/components/Image.svelte';
	import Dot from '$lib/components/Dot.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
	import HeroHeader from '$lib/components/HomePageComponents/HeroHeader.svelte';
	import ShowcaseContentImg from '$lib/components/HomePageComponents/ShowcaseContentImg.svelte';

	import GDVNPSBanner from '$lib/assets/gdvnps-banner.webp';
</script>

<MetaBuilder
	title="GDVNPS - GDPS Dành Cho Người Việt"
	desc="GDVNPS là một dự án Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam"
/>

{#snippet infoLink(href: string, icon: KnownIcon, label: string)}
	<Link {href} variant="navigation" fontSize="text-xs lg:text-base">
		<div class="flex items-center gap-x-(--info-link-gap)">
			<Icon {icon} size={24} /><span>{label}</span>
		</div></Link
	>
{/snippet}

<BlurLightFilter />
<PageLayout style="--info-gap:1rem;--info-link-gap:0.5rem">
	<HeroHeader />
	<div class="flex justify-center">
		<Image
			loading="eager"
			src={GDVNPSBanner}
			alt="GDVNPS Banner"
			width={1280 - 500}
			height={720 - 500}
			className="pointer-events-none select-none"
		/>
	</div>
	<div class="flex w-full flex-col items-center justify-center gap-y-(--info-gap)">
		<div>
			<div class="flex flex-row items-center justify-center gap-(--info-gap)">
				{@render infoLink('https://discord.gg/SmBs7xGSWM', 'discord', 'Discord')}
				<Dot />
				{@render infoLink('/download', 'download', 'Tải xuống')}
				<Dot />
				{@render infoLink('https://gdvnps.ps.fhgdps.com/dashboard', 'dashboard', 'Dashboard')}
			</div>
		</div>
	</div>
	<section class="grid grid-cols-1 items-center justify-items-center gap-7 lg:mx-16 lg:grid-cols-2">
		<div class="m-0 text-slate-300/90">
			<p class="font-main/[1.25] leading-[1.75] tracking-wide">
				GDVNPS là <strong
					class="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>máy chủ Geometry Dash Private Server (GDPS)</strong
				>
				dành cho <strong>người Việt</strong>. Với tiêu chí đặt
				<strong class="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>trải nghiệm và chất lượng lên hàng đầu</strong
				>. GDVNPS còn hỗ trợ trên các nền tảng phổ biến như
				<strong
					class="bg-gradient-to-bl from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>Windows</strong
				>,
				<strong
					class="bg-gradient-to-tr from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>Android</strong
				>
				và
				<strong
					class="bg-gradient-to-br from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>iOS</strong
				>, kèm với đó là khả năng tương thích với
				<strong
					class="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent hover:text-orange-400 hover:underline"
					><a href="https://geode-sdk.org/">Geode</a></strong
				> tốt.
			</p>
		</div>
		<ShowcaseContentImg />
	</section>
</PageLayout>
