<script lang="ts">
	import clsx from 'clsx';
	import type { TailwindFontSizeClass, AnchorLinkTarget } from '$lib';

	type AnchorLinkVariant = 'default' | 'navigation';

	interface LinkPropsType {
		href: string | undefined;
		label: string | null;
		target?: AnchorLinkTarget;
		className?: string;
		fontSize?: TailwindFontSizeClass;
		variant?: AnchorLinkVariant;
	}

	const {
		href,
		label,
		target = '_self',
		className,
		fontSize = 'text-base',
		variant = 'default'
	}: LinkPropsType = $props();
</script>

<a
	href={`${href}`}
	target={`${target}`}
	class={clsx('link', fontSize, {
		default: variant === 'default',
		navigation: variant === 'navigation'
	})}>{label}</a
>

<style lang="scss" scoped>
	@reference "$lib/utils/app.css";

	.link {
		@apply text-slate-300;
		&.default {
			@apply no-underline hover:underline;
		}
		&.navigation {
			@apply text-slate-300/90 transition-all duration-150 hover:text-slate-200/90;
		}
	}
</style>
