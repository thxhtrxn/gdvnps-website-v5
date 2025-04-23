<script lang="ts">
	interface ButtonRowPropsType {
		className?: string;
		children: any;
	}

	let { className = '', children }: ButtonRowPropsType = $props();
</script>

<div class={`flex items-center gap-x-2.5 ${className}`}>{@render children()}</div>
