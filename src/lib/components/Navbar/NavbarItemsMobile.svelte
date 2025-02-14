<script>
	import { navLinks } from '$lib';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';

	export let openMenu = false;

	function menuButtonHandler() {
		openMenu = !openMenu;
	}
</script>

<button
	aria-expanded={openMenu ? 'true' : 'false'}
	aria-label="Menu button"
	class="z-50 block cursor-pointer lg:hidden"
	on:click={menuButtonHandler}
>
	<Icon icon="menu" size={38} />
</button>

<div
	class="fixed top-0 left-0 z-30 h-screen w-full border-b border-gray-800 bg-gray-950 shadow-md transition-opacity duration-300 lg:hidden"
	class:opacity-100={openMenu}
	class:opacity-0={!openMenu}
>
	<ul>
		{#each navLinks as navLink (navLink.id)}
			<li class="p-2">
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

<style scoped>
	@reference "$lib/assets/app.css";

	ul {
		@apply flex h-full flex-col items-center justify-center;
	}
</style>
