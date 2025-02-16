<script>
	import { cubicOut, backOut } from 'svelte/easing';
	import { blur } from 'svelte/transition';
	import { navLinks, discordLink } from '$lib';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';

	export let openMenu = false;

	const menuButtonHandler = () => (openMenu = !openMenu);
</script>

<div class="flex items-center gap-x-2.5 lg:hidden">
	<div
		class="flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-800/80 bg-zinc-900/20 px-1.5 py-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40 lg:hidden"
	>
		<a href={discordLink} target="_blank" class="flex items-center gap-1.5" title="Discord">
			<Icon icon="discord" size={37} /><span><p>Discord</p></span>
		</a>
	</div>
	<button
		aria-expanded={openMenu ? 'true' : 'false'}
		aria-label="Menu button"
		class={`flex cursor-pointer items-center justify-center rounded-lg border-2 border-gray-800/80 ${openMenu ? 'bg-zinc-900/75' : 'bg-zinc-900/20'} p-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40`}
		onclick={menuButtonHandler}
	>
		<Icon icon="menu" size={38} />
	</button>
</div>

{#if openMenu}
	<div
		class="absolute top-17 right-0 z-30 block w-fit rounded-lg border-2 border-gray-800/80 bg-zinc-900/10 px-8 py-6 shadow-xl backdrop-blur-lg lg:hidden"
		in:blur={{ delay: 10, opacity: 100, easing: cubicOut, duration: 400 }}
		out:blur={{ delay: 20, opacity: 0, easing: backOut, duration: 470 }}
	>
		<ul class="flex flex-col items-end gap-4">
			{#each navLinks as navLink (navLink.id)}
				<li>
					<Link
						fontSize="text-[1.17rem]"
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
