<script lang="ts">
	import { navLinks, discordLink } from '$lib';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';
</script>

<ul class="hidden shrink flex-row items-center gap-12 text-base lg:flex">
	{#each navLinks as navLink (navLink.id)}
		<li>
			<Link fontSize="text-base" href={navLink.href} label={navLink.label} variant="navigation" />
		</li>
	{/each}
</ul>
<div class="hidden shrink lg:flex">
	<div class="flex flex-wrap items-center gap-1">
		<a href={discordLink} target="_blank" class="inline-block" title="Discord">
			<Icon icon="discord" size={28} />
		</a>
	</div>
</div>
