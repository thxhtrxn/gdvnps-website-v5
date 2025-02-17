<script lang="ts">
	import FooterLayout from './FooterLayout.svelte';
	import Link from '../Link.svelte';
	import Icon from '../Icon.svelte';
	import Dot from '../Dot.svelte';

	import { discordLink } from '$lib';

	type FooterLinkObjType = {
		id: number;
		label: string;
		href: string;
	}[];

	const footerLinks = [
		{ id: 1, label: 'Tải xuống', href: '/download' },
		{ id: 2, label: 'FAQ', href: '/faq' },
		{ id: 3, label: 'Browser', href: '#browser' },
		{ id: 4, label: 'Dashboard', href: 'https://gdvnps.ps.fhgdps.com/dashboard' },
		{ id: 5, label: 'Brand', href: '/brand' },
		{ id: 6, label: 'Credit', href: '/credit' }
	];
</script>

<FooterLayout>
	<div slot="footer_link" class="flex items-center justify-between lg:gap-5">
		<nav class="flex flex-col gap-y-9 py-8 lg:gap-y-12">
			<nav
				aria-label="Footer link"
				class="grid grid-cols-2 flex-wrap items-center justify-center gap-x-16 gap-y-9 lg:grid lg:grid-cols-3 lg:gap-x-24 lg:gap-y-12"
			>
				{#each footerLinks as footerLink (footerLink.id)}
					<Link variant="footer" href={footerLink.href} label={footerLink.label} />
				{/each}
				<a
					href={discordLink}
					target="_blank"
					class="flex items-center gap-x-1.5 text-left text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90"
					title="Discord"
				>
					<Icon icon="discord" size={28} /><span><p>Discord</p></span>
				</a>
			</nav>
		</nav>
		<h1
			class="hidden bg-gradient-to-l from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-right text-7xl font-bold text-transparent lg:inline-block"
		>
			GDVNPS
		</h1>
	</div>

	<div slot="footer_info">
		<div class="py-8">
			<div class="flex items-center justify-between gap-6 py-3">
				<div class="flex items-center gap-4">
					<img
						src="/gdvnps-logo-no-bg.svg"
						alt="GDVNPS's logo"
						width={38}
						height={38}
						class="pointer-events-none"
					/>
					<p class="copyright flex items-center text-base text-slate-300/90">
						Copyright <Icon icon="copyright" size={17} className="mx-1" /> GDVNPS 2024-present
					</p>
				</div>
			</div>
			<div class="py-3">
				<span class="flex items-center text-base text-slate-300/90"
					><h2 class="font-semibold">Legal:</h2>
					<a href="/terms-and-conditions" class="px-1 hover:text-slate-200/90">Terms & Conditions</a
					><span class="px-1"><Dot /></span><a
						href="/privacy-policy"
						class="px-1 hover:text-slate-200/90">Privacy Policy</a
					></span
				>
			</div>
		</div>
	</div>
</FooterLayout>
