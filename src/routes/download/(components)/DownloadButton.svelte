<script lang="ts">
	import ButtonLink from '$lib/components/Button/ButtonLink.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { href, children }: { href: string | undefined; children: any } = $props();
</script>

<ButtonLink {href}>
	<div class="flex h-full w-full items-center px-2 py-1.5">
		<span>
			<Icon icon="download" size={25} />
		</span>
		<span class="font-medium">{@render children()}</span>
	</div>
</ButtonLink>
