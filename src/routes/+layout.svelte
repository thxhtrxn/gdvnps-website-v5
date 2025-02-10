<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Nav, NavItemsPC } from '$lib/components/Navbar';
	import Footer from '$lib/components/Footer.svelte';
	import { Link, Dot } from '$lib/components/UI';
	import '$lib/utils/app.css';
	let { children } = $props();

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

<Nav>
	<NavItemsPC />
</Nav>
<div aria-label="Content" class="mx-auto w-full max-w-screen-2xl px-4 lg:px-12">
	{@render children()}
</div>
<Footer>
	<div slot="footer_link" class="flex items-center justify-between lg:gap-5">
		<nav
			aria-label="Footer link"
			class="grid grid-cols-2 flex-wrap items-center justify-center gap-x-16 gap-y-9 py-8 lg:grid lg:grid-cols-3 lg:gap-x-24 lg:gap-y-12"
		>
			{#each footerLinks as footerLink (footerLink.id)}
				<Link variant="footer" href={footerLink.href} label={footerLink.label} />
			{/each}
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
					<img src="/gdvnps-logo-no-bg.svg" alt="GDVNPS's logo" width={38} height={38} />
					<p class="text-base text-slate-300/90">Copyright © GDVNPS 2024-present</p>
				</div>
				<div>
					<a
						href="https://discord.gg/SmBs7xGSWM"
						target="_blank"
						class="inline-block"
						title="Discord"
					>
						<Icon icon="ic:round-discord" width="34" height="34" />
					</a>
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
</Footer>
