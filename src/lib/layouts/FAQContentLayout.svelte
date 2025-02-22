<script lang="ts">
	let { id, children }: { id?: string; children: any } = $props();
</script>

<article {id} class="markdown-faq rounded-xl bg-[#1f1e33]/50 p-5">
	{@render children()}
</article>
