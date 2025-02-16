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
		fontSize?: TailwindFontSizeClass | string;
		variant?: AnchorLinkVariant;
	}

	let {
		href,
		label,
		target = '_self',
		className,
		onClickFn,
		fontSize = 'text-base',
		variant = 'default'
	}: LinkPropsType = $props();

	const linkVariantClasses = {
		default: clsx('no-underline hover:underline', fontSize),
		navigation: clsx(
			'text-slate-300/90 transition-all duration-150 hover:text-slate-200/90',
			fontSize
		),
		footer: clsx(
			'text-left text-base text-slate-300/90 transition-all duration-150 hover:text-slate-200/90',
			fontSize
		)
	};

	const linkClasses = clsx('text-slate-300', linkVariantClasses[variant], className);
</script>

<a
	{href}
	target={variant === 'default' ? target : undefined}
	onclick={onClickFn}
	class={linkClasses}
>
	{label}
</a>
