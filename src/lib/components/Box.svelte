<script lang="ts">
	let { className, children }: { className?: string; children: any } = $props();
</script>

<div class={`w-full px-2 py-4 lg:p-2 ${className}`}>
	<div class="block h-full rounded-lg border border-slate-800 bg-[#1f1e33]/55">
		<article class="flex h-full flex-col p-6">{@render children()}</article>
	</div>
</div>
