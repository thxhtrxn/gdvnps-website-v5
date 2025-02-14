<script lang="ts">
	import clsx from 'clsx';
	import type { TailwindFontSizeClass, AnchorLinkTarget } from '$lib';

	type AnchorLinkVariant = 'default' | 'navigation' | 'footer';

	interface LinkPropsType {
		href: string | undefined;
		label: string | null;
		target?: AnchorLinkTarget;
		className?: string;
		onClickFn?: () => void;
		fontSize?: TailwindFontSizeClass;
		variant?: AnchorLinkVariant;
	}

	const {
		href,
		label,
		target = '_self',
		className,
		onClickFn,
		fontSize = 'text-base',
		variant = 'default'
	}: LinkPropsType = $props();
</script>

{#if variant === 'navigation'}
	<a
		href={`${href}`}
		onclick={onClickFn}
		class={clsx('link', {
			navigation: variant === 'navigation'
		})}>{label}</a
	>
{:else if variant === 'footer'}
	<a
		href={`${href}`}
		class={clsx('link', {
			footer: variant === 'footer'
		})}>{label}</a
	>
{:else}
	<a
		href={`${href}`}
		target={`${target}`}
		class={clsx(
			'link',
			fontSize,
			{
				default: variant === 'default'
			},
			className
		)}>{label}</a
	>
{/if}

<style lang="scss" scoped>
	@reference "$lib/utils/app.css";

	.link {
		@apply text-slate-300;
		&.default {
			@apply no-underline hover:underline;
		}
		&.navigation {
			@apply text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90;
		}
		&.footer {
			@apply text-left text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90;
		}
	}
</style>
