<script>
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { navLinks, discordLink } from '$lib';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';

	export let openMenu = false;

	const menuButtonHandler = () => (openMenu = !openMenu);
</script>

<div class="flex items-center gap-x-1 lg:hidden">
	<div
		class="flex cursor-pointer items-center justify-center rounded-lg border-[1.2px] border-gray-800/80 bg-zinc-900/10 p-1 shadow backdrop-blur-lg hover:border-gray-800/90 lg:hidden"
	>
		<a href={discordLink} target="_blank" class="inline-block" title="Discord">
			<Icon icon="discord" size={37} />
		</a>
	</div>
	<button
		aria-expanded={openMenu ? 'true' : 'false'}
		aria-label="Menu button"
		class="flex cursor-pointer items-center justify-center rounded-lg border-[1.2px] border-gray-800/80 bg-zinc-900/10 p-1 shadow backdrop-blur-lg hover:border-gray-800/90"
		onclick={menuButtonHandler}
	>
		<Icon icon="menu" size={38} />
	</button>
</div>

{#if openMenu}
	<div
		class="absolute top-17 right-0 z-30 w-fit rounded-lg border-[1.2px] border-gray-800/80 bg-zinc-900/10 px-8 py-9 shadow-md backdrop-blur-lg"
		in:fade={{ easing: cubicOut }}
		out:fade={{ duration: 200 }}
	>
		<ul class="gap-4">
			{#each navLinks as navLink (navLink.id)}
				<li>
					<Link
						href={navLink.href}
						label={navLink.label}
						variant="navigation"
						onClickFn={menuButtonHandler}
					/>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style lang="scss" scoped>
	@reference "$lib/assets/app.css";

	ul {
		@apply flex flex-col items-end;
	}
</style>
