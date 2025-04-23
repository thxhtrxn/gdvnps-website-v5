<script lang="ts">
	import { goto } from '$app/navigation';

	function navigateToBrandPath(event: MouseEvent) {
		if (event.button === 2) {
			event.preventDefault();
			goto('/brand#download-logo');
		}
	}
</script>

<header class="navbar py-3.5">
	<nav class="relative w-full">
		<div
			class="relative flex w-full max-w-screen-xl items-center justify-between"
			style="margin: 0 auto"
		>
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-start gap-2"
				on:mouseup={navigateToBrandPath}
				on:contextmenu|preventDefault
			>
				<div class="z-50 h-fit w-fit">
					<a href="/" class="navbar__logo-link">
						<img
							src="/gdvnps-logo-no-bg.svg"
							alt="GDVNPS's logo"
							title="Trang chủ"
							width={58}
							height={58}
						/>
					</a>
				</div>
			</div>

			<slot />
		</div>
	</nav>
</header>

<style lang="scss" module>
	@reference "$routes/app.css";

	.navbar {
		@apply z-50 flex h-24 w-full items-center justify-center border-b border-transparent bg-transparent px-6 duration-150 lg:px-20;
		&__logo-link {
			@apply inline-block no-underline;
			> img {
				@apply pointer-events-none select-none;
			}
		}
	}
</style>
