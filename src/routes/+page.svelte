<script lang="ts">
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	import type { KnownIcon } from '$lib';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Image from '$lib/components/Image.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
	import HeroHeader from './(components)/HeroHeader.svelte';
	import ShowcaseContentImg from './(components)/ShowcaseContentImg.svelte';

	import GDVNPSBanner from '$lib/assets/gdvnps-banner.webp';
	import LVLRSS from './(assets)/rating-lvl-ss.webp';
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
				{@render infoLink('https://gdps.gdvnps.site/storage/dashboard', 'dashboard', 'Dashboard')}
			</div>
		</div>
	</div>
	<section class="grid grid-cols-1 items-center justify-items-center gap-9 lg:mx-16 lg:grid-cols-2">
		<div class="m-0 text-slate-300/90">
			<p class="font-main/[1.25] leading-[1.75] tracking-wide">
				GDVNPS là <strong class="text-orange-400"
					>máy chủ Geometry Dash Private Server (GDPS)</strong
				>
				dành cho <strong>người Việt</strong>. Với tiêu chí đặt
				<strong class="text-orange-400">trải nghiệm và chất lượng lên hàng đầu</strong>. GDVNPS còn
				hỗ trợ trên các nền tảng phổ biến như
				<strong class="text-orange-400">Windows</strong>,
				<strong class="text-orange-400">Android</strong>
				và
				<strong class="text-orange-400">iOS</strong>, kèm với đó là khả năng tương thích với
				<strong class="text-orange-400 hover:text-orange-400 hover:underline"
					><a href="https://geode-sdk.org/">Geode</a></strong
				> tốt.
			</p>
		</div>
		<ShowcaseContentImg />
	</section>
	<section
		class="mt-20 grid grid-cols-1 items-center justify-items-center gap-9 lg:mx-16 lg:grid-cols-2"
	>
		<div class="m-0 text-slate-300/90">
			<p class="font-main/[1.25] leading-[1.75] tracking-wide">
				GDVNPS được tạo ra để <strong class="text-orange-400">giúp các creator Việt Nam</strong>
				phát triển kỹ năng làm level. Không <strong class="text-orange-400">nghiêm ngặt</strong>
				như Geometry Dash, tiêu chuẩn xếp hạng ở đây cũng
				<strong class="text-orange-400">không quá cao</strong>, để mọi người có thêm động lực học
				hỏi và thử sức.
			</p>
			<div>
				<ButtonLink
					variant="outline"
					href="/faq#he-thong-rating"
					className="text-slate-200 inline-block px-4 py-3 transition-all duration-300 mt-3.5"
					>Tiêu chuẩn rating level</ButtonLink
				>
			</div>
		</div>
		<Image loading="lazy" src={LVLRSS} alt="Rating level image" />
	</section>
</PageLayout>
