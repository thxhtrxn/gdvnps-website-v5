<script lang="ts">
	// Các props chính
	export let items: any[] = [];
	export let radius: number = 160;
	export let duration: number = 20;
	export let iconSize: number = 30;
	export let reverse: boolean = false;
	export let speed: number = 1;
	export let path: boolean = true;
	export let className: string = '';

	// Tính toán thời lượng dựa vào tốc độ
	$: calculatedDuration = duration / speed;
</script>

<!-- Vẽ đường tròn nếu có -->
{#if path}
	<svg class="orbit-path" xmlns="http://www.w3.org/2000/svg">
		<circle cx="50%" cy="50%" r={radius} />
	</svg>
{/if}

<!-- Render từng phần tử -->
{#each items as item, index (index)}
	<div
		class={`orbiting-circle ${reverse ? 'reverse' : ''} ${className}`}
		style="
      --duration: {calculatedDuration};
      --radius: {radius};
      --angle: {(360 / items.length) * index};
      --icon-size: {iconSize}px;
    "
	>
		{#if typeof item === 'function'}
			<svelte:component this={item} />
		{:else}
			{item}
		{/if}
	</div>
{/each}

<style>
	@keyframes orbit {
		0% {
			transform: rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px))
				rotate(calc(var(--angle) * -1deg));
		}
		100% {
			transform: rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px))
				rotate(calc((var(--angle) * -1deg) - 360deg));
		}
	}

	.orbiting-circle {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 9999px;
		width: var(--icon-size);
		height: var(--icon-size);
		animation: orbit calc(var(--duration) * 1s) linear infinite;
		transform-origin: center;
		pointer-events: none;
	}

	.orbiting-circle.reverse {
		animation-direction: reverse;
	}

	.orbit-path {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.orbit-path circle {
		stroke: rgba(0, 0, 0, 0.1);
		stroke-width: 1;
		fill: none;
	}

	:global(.dark) .orbit-path circle {
		stroke: rgba(255, 255, 255, 0.1);
	}
</style>
