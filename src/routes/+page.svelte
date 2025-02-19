<script lang="ts">
	import type { KnownIcon } from '$lib';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import ButtonRow from '$lib/components/Button/ButtonRow.svelte';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Image from '$lib/components/Image.svelte';
	import Dot from '$lib/components/Dot.svelte';

	import GDVNPSBanner from '$lib/assets/gdvnps-banner.webp';

	import LVLGDSS1Webp from '$lib/assets/screenshot/lvl-gp-ss-1.webp';
	import LVLGDSS2Webp from '$lib/assets/screenshot/lvl-gp-ss-2.webp';
	import LVLGDSS3Webp from '$lib/assets/screenshot/lvl-gp-ss-3.webp';
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

<div
	aria-hidden="true"
	class="pointer-events-none absolute top-0 right-0 left-0 -z-50 [margin-inline:auto] h-36 w-full max-w-[1200px] bg-gradient-to-b from-orange-400/40 to-orange-400/15 blur-[14rem] lg:blur-[15rem] xl:blur-[17rem]"
></div>
<main
	class="flex w-full max-w-[1400px] flex-col justify-center gap-y-(--hero-header-gap-y)"
	style="--hero-header-gap-y:3rem;--info-gap:1rem;--info-link-gap:0.5rem"
>
	<section
		class="mx-auto mt-14 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<!-- hero text -->
		<h1
			class="w-full text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold lg:text-[2.81rem]/[1.2]"
		>
			<span class="text-slate-300">Bởi</span>
			<span
				class="bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
				>người Việt</span
			>
			<span class="text-slate-300"> - Cho</span>
			<span
				class="bg-gradient-to-r from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
				>người Việt</span
			>
		</h1>
		<!-- desc paragraph -->
		<p
			style="word-wrap:break-word"
			class="text-center text-base leading-[1.8] font-normal tracking-wide text-slate-300/90 lg:text-lg"
		>
			Được lập ra vào 2024, GDVNPS là <strong>máy chủ GDPS</strong>
			dành cho
			<strong
				>cộng đồng người chơi Geometry Dash <span
					class="bg-gradient-to-tl from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>tại Việt Nam</span
				></strong
			>
		</p>
		<!-- button -->
		<ButtonRow>
			<ButtonLink
				variant="fill"
				href="/download"
				className="text-slate-200 inline-block px-4 py-3 transition-all duration-300"
				>Tải xuống</ButtonLink
			>
			<ButtonLink
				variant="outline"
				href="https://gdvnps.ps.fhgdps.com/dashboard"
				className="text-slate-200 inline-block px-4 py-3 transition-all duration-300"
				>Dashboard</ButtonLink
			>
		</ButtonRow>
	</section>
	<div class="flex justify-center">
		<Image
			loading="eager"
			src={GDVNPSBanner}
			alt="GDVNPS Banner"
			width={1280 - 500}
			height={720 - 500}
			className=" border border-slate-600 select-none"
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
	<section class="flex flex-col items-center gap-16 pt-20 lg:mx-48 lg:flex-row">
		<div class="m-0 text-slate-300/90">
			<p class="font-main/[1.25]">
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
		<div class="grid w-full grid-cols-2 gap-2.5">
			<Image
				className="flex [grid-column-start:1] [grid-column-end:3]"
				src={LVLGDSS1Webp}
				alt="Screenshot Gameplay 1"
				loading="lazy"
			/>
			<Image src={LVLGDSS2Webp} alt="Screenshot Gameplay 2" loading="lazy" />
			<Image src={LVLGDSS3Webp} alt="Screenshot Gameplay 3" loading="lazy" />
		</div>
	</section>
</main>
