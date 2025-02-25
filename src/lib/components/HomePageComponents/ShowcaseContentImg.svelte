<script lang="ts">
	import Image from '../Image.svelte';

	import LVLGDSS1Webp from '$lib/assets/screenshot/lvl-gp-ss-1.webp';
	import LVLGDSS2Webp from '$lib/assets/screenshot/lvl-gp-ss-2.webp';
	import LVLGDSS3Webp from '$lib/assets/screenshot/lvl-gp-ss-3.webp';
</script>

<div class="img-parent mt-2.5 hidden lg:mt-0 lg:flex">
	<Image
		className="shadow"
		src={LVLGDSS1Webp}
		width={1600 - 1400}
		alt="Showcase Image 1"
		loading="lazy"
	/>
	<Image
		className="shadow"
		src={LVLGDSS2Webp}
		width={1600 - 1380}
		alt="Showcase Image 2"
		loading="lazy"
	/>
</div>
<div class="block lg:hidden">
	<Image className="shadow" src={LVLGDSS3Webp} alt="Showcase Image" loading="lazy" />
</div>

<style lang="scss" scoped>
	div.img-parent {
		padding: 0.65rem;
		height: 20rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		& > :global(*:first-child) {
			animation: 7s ease-in-out 0s infinite alternate both running top-img;
			z-index: 1;
		}
		& > :global(*:last-child) {
			animation: 6s ease-in-out 1s infinite alternate both running bottom-img;
		}
	}
	@keyframes top-img {
		0% {
			transform: translate(3em, -2em) scale(200%) rotate(-15deg);
		}
		100% {
			transform: translate(3em, -2em) scale(190%) rotate(-10deg);
		}
	}
	@keyframes bottom-img {
		0% {
			transform: translate(-0.5em, +5em) scale(160%) rotate(10deg);
		}
		100% {
			transform: translate(-0.5em, +5em) scale(140%) rotate(7deg);
		}
	}
</style>
