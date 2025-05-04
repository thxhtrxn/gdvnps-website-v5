<script lang="ts">
	import ButtonRow from '$lib/components/Button/ButtonRow.svelte';
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';
</script>

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
		Được lập ra vào tháng 6 năm 2024, GDVNPS là <strong>máy chủ GDPS</strong>
		dành cho
		<strong
			>cộng đồng người chơi Geometry Dash <span class="text-orange-400">tại Việt Nam</span></strong
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
			href="https://gdps.gdvnps.site/storage/dashboard"
			className="text-slate-200 inline-block px-4 py-3 transition-all duration-300"
			>Dashboard</ButtonLink
		>
	</ButtonRow>
</section>
