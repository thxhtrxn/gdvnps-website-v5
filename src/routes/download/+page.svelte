<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
	import GridRow from '$lib/components/GridRow.svelte';
	import OsDownloadBox from './(components)/OSDownloadBox.svelte';
	import GeodeDownloadBox from './(components)/GeodeDownloadBox.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import OSIntroduce from '$lib/components/OSIntroduce.svelte';
	import Icon from '$lib/components/Icon.svelte';
	export const prerender = true;

	const releaseQuery = createQuery({
		queryKey: ['releases'],
		queryFn: async () =>
			await fetch('https://api.github.com/repos/TacoEnjoyer/gdvnps/releases/latest').then((r) =>
				r.json()
			),
		refetchInterval: 15000
	});

	const getDownloadLink = (osKeyword: string) => {
		return $releaseQuery?.data?.assets.find((asset: any) =>
			asset.name.toLowerCase().includes(osKeyword.toLowerCase())
		)?.browser_download_url;
	};
</script>

<MetaBuilder
	title="Tải Xuống GDVNPS"
	desc="Tải xuống GDVNPS cho Windows, Android, iOS và Geode cho GDVNPS Android"
/>

{#snippet OSBox(
	OS_name: 'Windows' | 'Android' | 'iOS',
	OS_icon: 'windows' | 'android' | 'ios',
	OS_downloadLink: any
)}
	<OsDownloadBox {OS_name} {OS_icon} {OS_downloadLink} />
{/snippet}

<BlurLightFilter />
<PageLayout>
	<section
		class="mx-auto mt-13 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<section>
			<div>
				<div class="mx-auto max-w-5xl">
					<div class="mx-auto mb-3.5 max-w-lg space-y-6 text-center">
						<h1
							class="w-full text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold lg:text-[2.81rem]/[1.2]"
						>
							<span class="text-slate-300">Tải xuống</span>
							<span
								class="bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
								>GDVNPS</span
							>
						</h1>
						{#if $releaseQuery.isSuccess}
							<p class="font-main/[1.25] leading-[1.75] tracking-wide text-slate-300/90">
								Phiên bản: <strong class="text-orange-400">{$releaseQuery.data.tag_name}</strong>
							</p>
						{:else if $releaseQuery.isLoading}
							<p
								class="z-30 text-center text-base leading-[1.85] font-normal tracking-wide text-slate-300/90 lg:text-lg"
							>
								Phiên bản: Đang kiểm tra...
							</p>
						{:else if $releaseQuery.isError}
							<p
								class="z-30 text-center text-base leading-[1.85] font-normal tracking-wide text-slate-300/90 lg:text-lg"
							>
								Đã xảy ra lỗi, vui lòng thử lại sau (Lỗi: {$releaseQuery.error.message})
							</p>
						{/if}
					</div>
					<div
						class="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md"
					>
						<div
							role="presentation"
							class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
						></div>
						<div class="absolute inset-0 m-auto flex size-fit justify-center gap-2">
							<OSIntroduce
								class="size-16 border-white/10 bg-gray-500/55 shadow-xl shadow-white/15 backdrop-blur-2xl backdrop-grayscale select-none"
								isCenter={true}
							>
								<img
									src="/gdvnps-logo-no-bg.svg"
									alt="GDVNPS's logo"
									class="pointer-events-none"
									width={58}
									height={58}
								/>
							</OSIntroduce>
						</div>
						<div>
							<Marquee>
								<OSIntroduce>
									<Icon icon="android" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="ios" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="windows" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="android" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="ios" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="windows" size={25} fill="#364153" />
								</OSIntroduce>
							</Marquee>
						</div>

						<div>
							<!-- gap={24} speed={20} speedOnHover={10} -->
							<Marquee reverse>
								<OSIntroduce>
									<Icon icon="android" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="ios" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="windows" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="android" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="ios" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="windows" size={25} fill="#364153" />
								</OSIntroduce>
							</Marquee>
						</div>
						<div>
							<Marquee>
								<OSIntroduce>
									<Icon icon="android" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="ios" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="windows" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="android" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="ios" size={25} fill="#364153" />
								</OSIntroduce>
								<OSIntroduce>
									<Icon icon="windows" size={25} fill="#364153" />
								</OSIntroduce>
							</Marquee>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
	<section class="flex items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-4">
			<GridRow>
				{@render OSBox('Windows', 'windows', getDownloadLink('zip'))}
				{@render OSBox('Android', 'android', getDownloadLink('apk'))}
				{@render OSBox('iOS', 'ios', getDownloadLink('ipa'))}
				<GeodeDownloadBox />
			</GridRow>
		</div>
	</section>
</PageLayout>
