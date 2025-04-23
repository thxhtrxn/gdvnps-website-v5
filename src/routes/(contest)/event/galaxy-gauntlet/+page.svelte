<script lang="ts">
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';

	$effect(() => {});
</script>

<MetaBuilder
	title="Galaxy Gauntlet Creator Contest"
	desc="Webpage chính thức cho Galaxy Gauntlet Creator Contest"
/>

<div class="galaxy-gauntlet__loading z-50"></div>
<div class="galaxy-gauntlet__page-body w-full">
	<section class="galaxy-gauntlet__content">
		<div class="galaxy-gauntlet__hero-header flex items-center">
			<h1 class="galaxy-gauntlet__header-text hero-text text-4xl">Hello</h1>
		</div>
	</section>
</div>

<style lang="scss">
	@reference "$routes/app.css";

	@font-face {
		font-family: 'Nasalization';
		src: url('./\(assets\)/Nasalization Rg.otf');
	}

	.galaxy-gauntlet {
		&__loading {
			@apply fixed top-0 h-screen w-full bg-[#814886];
		}

		&__header-text {
			font-family: 'Nasalization';
		}

		&__hero-header {
			@apply h-full max-h-[75vh] w-full;
		}

		&__page-body {
			@apply mx-10 my-1;
		}

		&__content {
			@apply my-4 pt-3.5;
		}
	}
</style>
