<script lang="ts">
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import ButtonRow from '$lib/components/Button/ButtonRow.svelte';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';
</script>

<MetaBuilder
	title="GDVNPS - GDPS Bởi Người Việt, Cho Người Việt"
	desc="GDVNPS là một dự án Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam"
/>

<div
	aria-hidden="true"
	class="pointer-events-none absolute top-0 right-0 left-0 -z-50 [margin-inline:auto] h-36 w-full max-w-[1200px] bg-gradient-to-b from-orange-400/40 to-orange-400/15 blur-[15rem] lg:blur-[16rem] xl:blur-[17rem]"
></div>
<main class="w-full max-w-[1380px]">
	<section
		class="mx-auto mt-16 flex w-full flex-col items-center justify-center gap-5 px-4 sm:max-w-screen-md sm:px-8 md:mt-20 md:gap-6 lg:mt-24 lg:gap-7"
	>
		<!-- hero text -->
		<h1
			class="text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold lg:text-5xl/[1.2]"
		>
			<span class="text-slate-300">GDPS Bởi</span>
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
			Được lập ra vào 2024, GDVNPS là <strong>máy chủ Geometry Dash Private Server</strong> dành cho
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
				className="text-slate-200 inline-block px-4 py-3.5 transition-all duration-300"
				><strong>Tải xuống</strong></ButtonLink
			>
			<ButtonLink
				variant="outline"
				href="https://gdvnps.ps.fhgdps.com/dashboard"
				className="text-slate-200 inline-block px-4 py-3.5 transition-all duration-300"
				>Dashboard</ButtonLink
			>
		</ButtonRow>
	</section>
</main>
