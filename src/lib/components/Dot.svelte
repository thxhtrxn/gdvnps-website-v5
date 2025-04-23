<script lang="ts">
	let { className = '' }: { className?: string } = $props();
</script>

<div
	aria-hidden="true"
	class={`h-[.3rem] w-[.3rem] rounded-full bg-slate-300 opacity-50 ${className}`}
></div>
