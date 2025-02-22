<script lang="ts">
	interface PageLayoutPropsType {
		className?: string;
		style?: string;
		children: any;
	}

	let { className = '', style, children }: PageLayoutPropsType = $props();
</script>

<main
	class={`flex w-full max-w-[1400px] flex-col justify-center gap-y-(--page-gap-y) ${className}`}
	style={`--page-gap-y:3rem;${style}`}
>
	{@render children()}
</main>
