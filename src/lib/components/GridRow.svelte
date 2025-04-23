<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<div class="mt-3.5">
	<div class="grid grid-cols-1 lg:grid-cols-3 md:lg:grid-cols-2">
		{@render children()}
	</div>
</div>
