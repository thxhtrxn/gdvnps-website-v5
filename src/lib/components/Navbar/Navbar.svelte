<script lang="ts">
	import Icon from '@iconify/svelte';

	// export let openMenu: boolean = false;

	// function openMenuHandler() {
	// 	openMenu = !openMenu;
	// }
</script>

<header class="navbar py-3.5">
	<nav class="relative w-full">
		<div
			class="relative flex w-full max-w-[var(--max-width-xl)] items-center justify-between"
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
			<ul class="hidden shrink flex-row items-center gap-12 text-base lg:flex">
				<li>
					<a
						href="/download"
						class="text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90"
						>Tải xuống</a
					>
				</li>
				<li>
					<a
						href="/faq"
						class="text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90"
						>FAQ</a
					>
				</li>
				<li>
					<a
						href="#browser"
						class="text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90"
						>Browser</a
					>
				</li>
				<li>
					<a
						href="#dashboard"
						class="text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90"
						>Dashboard</a
					>
				</li>
			</ul>
			<div class="hidden shrink lg:flex">
				<div class="flex flex-wrap items-center gap-1">
					<a
						href="https://discord.gg/SmBs7xGSWM"
						target="_blank"
						class="inline-block"
						title="Discord"
					>
						<Icon icon="ic:round-discord" width="24" height="24" />
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>

<style lang="scss" module>
	@reference "../../../app.css";

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
