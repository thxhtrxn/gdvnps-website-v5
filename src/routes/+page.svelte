<script lang="ts">
	import type { KnownIcon } from '$lib';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import ButtonRow from '$lib/components/Button/ButtonRow.svelte';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';
	import Link from '$lib/components/Link.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import GDVNPSBanner from '$lib/assets/gdvnps-banner.webp';
</script>

<MetaBuilder
	title="GDVNPS - GDPS Dành Cho Người Việt"
	desc="GDVNPS là một dự án Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam"
/>

{#snippet infoLink(href: string, icon: KnownIcon, label: string)}
	<Link {href} variant="navigation">
		<div class="flex items-center gap-x-(--info-link-gap)">
			<Icon {icon} size={28} /><span>{label}</span>
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
			Được lập ra vào 2024, GDVNPS là <strong
				><a href="/faq#gdps-la-gi" class="hover:underline">máy chủ GDPS</a></strong
			>
			dành cho
			<strong
				>cộng đồng người chơi Geometry Dash <span class="text-orange-400">tại Việt Nam</span
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
		<img
			loading="eager"
			src={GDVNPSBanner}
			alt="GDVNPS Banner"
			width={1280 - 500}
			height={720 - 500}
			class="pointer-events-none rounded-xl border border-slate-600 select-none"
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
			<div class="mt-3.5 flex flex-row items-center justify-center gap-(--info-gap)">
				{@render infoLink('https://gdvnps.ps.fhgdps.com/browser', 'browser', 'Browser')}
				<Dot />
				{@render infoLink('/faq', 'ask', 'FAQ')}
			</div>
		</div>
	</div>
</main>
