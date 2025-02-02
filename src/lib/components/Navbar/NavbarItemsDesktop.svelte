<script lang="ts">
	import Icon from '@iconify/svelte';
	import Link from '../UI/Link.svelte';

	type NavLinkObjType = {
		id: number;
		label: string;
		href: string;
	}[];

	const navLinks: NavLinkObjType = [
		{ id: 1, label: 'Tải xuống', href: '/download' },
		{ id: 2, label: 'FAQ', href: '/faq' },
		{ id: 3, label: 'Browser', href: '/browser' },
		{
			id: 4,
			label: 'Dashboard',
			href: 'https://gdvnps.ps.fhgdps.com/dashboard'
		}
	];
</script>

<ul class="hidden shrink flex-row items-center gap-12 text-base lg:flex">
	{#each navLinks as navLink (navLink.id)}
		<li>
			<Link href={navLink.href} label={navLink.label} variant="navigation" />
		</li>
	{/each}
</ul>
<div class="hidden shrink lg:flex">
	<div class="flex flex-wrap items-center gap-1">
		<a href="https://discord.gg/SmBs7xGSWM" target="_blank" class="inline-block" title="Discord">
			<Icon icon="ic:round-discord" width="24" height="24" />
		</a>
	</div>
</div>
