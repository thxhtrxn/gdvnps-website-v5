<script lang="ts">
	import Icon from '@iconify/svelte';
	import { icons, type KnownIcon } from '$lib';

	interface IconPropsType {
		icon: KnownIcon;
		size: number;
		className?: string | null;
	}

	const { icon, size, className = '' }: IconPropsType = $props();
</script>

<span class={`site-icon ${className}`}>
	<Icon width={size} height={size} icon={icons[icon]} />
</span>
