<script>
	import { cubicOut, backOut } from 'svelte/easing';
	import { blur } from 'svelte/transition';
	import { navLinks } from '$lib';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';
	import ButtonRow from '../Button/ButtonRow.svelte';
	import Button from '../Button/Button.svelte';
	import ButtonLink from '../Button/ButtonLink.svelte';

	export let openMenu = false;

	const menuButtonHandler = () => (openMenu = !openMenu);
</script>

<ButtonRow className="lg:hidden">
	<!-- Discord link button -->
	<ButtonLink
		variant="outline"
		href="/discord"
		label="Discord"
		className="flex items-center gap-1.5 px-2 py-1"
		title="Discord"><Icon icon="discord" size={37} /><span><p>Discord</p></span></ButtonLink
	>
	<!-- Menu button -->
	<Button
		variant="outline"
		aria-expanded={openMenu ? 'true' : 'false'}
		aria-label="Menu button"
		className={`p-1 ${openMenu ? 'bg-zinc-900/75' : 'bg-zinc-900/20'}`}
		onClickFn={menuButtonHandler}><Icon icon="menu" size={38} /></Button
	>
</ButtonRow>

<!-- Navbar Menu -->
{#if openMenu}
	<div
		class="absolute top-17 right-0 z-30 block w-fit rounded-xl border-2 border-gray-800/80 bg-zinc-900/10 px-8 py-6 shadow-xl backdrop-blur-lg lg:hidden"
		in:blur={{ delay: 10, opacity: 100, easing: cubicOut, duration: 400 }}
		out:blur={{ delay: 20, opacity: 0, easing: backOut, duration: 470 }}
	>
		<ul class="flex flex-col items-end gap-4">
			{#each navLinks as navLink (navLink.id)}
				<li>
					<Link
						fontSize="text-[1.17rem]"
						href={navLink.href}
						variant="navigation"
						onClickFn={menuButtonHandler}
					>
						{navLink.label}
					</Link>
				</li>
			{/each}
		</ul>
	</div>
{/if}
