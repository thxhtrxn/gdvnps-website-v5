<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
	import GridRow from '$lib/components/GridRow.svelte';
	import OsDownloadBox from './(components)/OSDownloadBox.svelte';
	import GeodeDownloadBox from './(components)/GeodeDownloadBox.svelte';

	interface ReleaseDataType {
		tag_name: string;
		assets: {
			name: string;
			browser_download_url: string;
		}[];
	}

	let release: ReleaseDataType | null = null;

	onMount(async () => {
		try {
			const res = await fetch('https://api.github.com/repos/TacoEnjoyer/gdvnps/releases/latest');
			// const res = await fetch('https://api.github.com/repos/TacoEnjoyer/gdvnps/releases/194288434');
			release = await res.json();
			// console.log(release);
		} catch (error) {
			console.error('Error fetching release data:', error);
		}
	});

	const getDownloadLink = (osKeyword: string) => {
		return release?.assets.find((asset: any) =>
			asset.name.toLowerCase().includes(osKeyword.toLowerCase())
		)?.browser_download_url;
	};
</script>

<MetaBuilder
	title="Tải Xuống GDVNPS"
	desc="Tải xuống GDVNPS cho Windows, Android, iOS và Geode cho GDVNPS Android"
/>

<BlurLightFilter />
<PageLayout>
	<section
		class="mx-auto mt-13 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<h1
			class="w-full text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold lg:text-[2.81rem]/[1.2]"
		>
			<span class="text-slate-300">Tải xuống</span>
			<span
				class="bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
				>GDVNPS</span
			>
		</h1>
		{#if release}
			<p class="font-main/[1.25] leading-[1.75] tracking-wide text-slate-300/90">
				Phiên bản: <strong
					class="bg-gradient-to-bl from-orange-500 to-yellow-500 bg-clip-text text-transparent"
					>{release.tag_name}</strong
				>
			</p>
		{:else}
			<p
				class="z-30 text-center text-base leading-[1.85] font-normal tracking-wide text-slate-300/90 lg:text-lg"
			>
				Phiên bản: Đang kiểm tra...
			</p>
		{/if}
	</section>
	<section class="flex items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-4">
			<GridRow>
				<OsDownloadBox
					OS_name="Windows"
					OS_icon="windows"
					OS_downloadLink={getDownloadLink('zip')}
				/>
				<OsDownloadBox
					OS_name="Android"
					OS_icon="android"
					OS_downloadLink={getDownloadLink('apk')}
				/>
				<OsDownloadBox OS_name="iOS" OS_icon="ios" OS_downloadLink={getDownloadLink('ipa')} />
				<GeodeDownloadBox />
			</GridRow>
		</div>
	</section>
</PageLayout>
