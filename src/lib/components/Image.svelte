<script lang="ts">
	interface ImagePropsType {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		loading?: 'eager' | 'lazy';
		className?: string;
		style?: string;
	}

	const {
		src,
		alt,
		width,
		height,
		loading = 'eager',
		className = '',
		style
	}: ImagePropsType = $props();
</script>

<img {src} {alt} {width} {height} {loading} {style} class={`rounded-xl ${className}`} />
