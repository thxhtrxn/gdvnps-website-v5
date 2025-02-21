<script lang="ts">
	import Icon from '@iconify/svelte';
	import { icons, type KnownIcon } from '$lib';

	interface IconPropsType {
		icon: KnownIcon;
		size: number;
		className?: string | null;
		fill?: string;
	}

	const { icon, size, className = '', fill = '#ddd' }: IconPropsType = $props();
</script>

<span class={`site-icon ${className}`}>
	<Icon width={size} height={size} icon={icons[icon]} {fill} />
</span>
