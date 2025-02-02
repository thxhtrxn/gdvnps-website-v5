<script lang="ts">
	// export let openMenu: boolean = false;

	// function openMenuHandler() {
	// 	openMenu = !openMenu;
	// }
</script>

<header class="navbar py-3.5">
	<nav class="relative w-full">
		<div
			class="relative flex w-full max-w-screen-xl items-center justify-between"
			style="margin: 0 auto"
		>
			<div class="flex justify-start gap-2">
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
	@reference "$lib/utils/app.css";

	.navbar {
		@apply z-50 flex h-24 w-full items-center justify-center border-b border-transparent bg-transparent px-6 duration-150 lg:px-20;
		&__logo-link {
			@apply inline-block no-underline;
			> img {
				@apply pointer-events-none select-none;
			}
		}
		// &__menu-btn {
		// 	@apply block lg:hidden;
		// }
	}
</style>
