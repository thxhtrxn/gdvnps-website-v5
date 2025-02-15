<script>
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { navLinks, discordLink } from '$lib';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';

	export let openMenu = false;

	const menuButtonHandler = () => (openMenu = !openMenu);
</script>

<div class="flex items-center gap-x-2.5 lg:hidden">
	<div
		class="flex cursor-pointer items-center justify-center rounded-lg border-[1.2px] border-gray-800/80 bg-zinc-900/20 px-1.5 py-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40 lg:hidden"
	>
		<a href={discordLink} target="_blank" class="flex items-center gap-1.5" title="Discord">
			<Icon icon="discord" size={37} /><span><p>Discord</p></span>
		</a>
	</div>
	<button
		aria-expanded={openMenu ? 'true' : 'false'}
		aria-label="Menu button"
		class={`flex cursor-pointer items-center justify-center rounded-lg border-[1.2px] border-gray-800/80 ${openMenu ? 'bg-zinc-900/75' : 'bg-zinc-900/20'} p-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40`}
		onclick={menuButtonHandler}
	>
		<Icon icon="menu" size={38} />
	</button>
</div>

{#if openMenu}
	<div
		class="absolute top-17 right-0 z-30 w-fit rounded-lg border-[1.2px] border-gray-800/80 bg-zinc-900/10 px-8 py-6 shadow-md backdrop-blur-lg"
		in:fade={{ easing: cubicOut }}
		out:fade={{ duration: 200 }}
	>
		<ul class="gap-4">
			{#each navLinks as navLink (navLink.id)}
				<li>
					<Link
						fontSize="text-base"
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
