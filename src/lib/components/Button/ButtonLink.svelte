<script lang="ts">
	import clsx from 'clsx';
	import type { TailwindFontSizeClass } from '$lib';

	type ButtonVariant = 'fill' | 'outline';

	interface ButtonLinkPropsType {
		href: string | undefined;
		className?: string;
		fontSize?: TailwindFontSizeClass | string;
		variant?: ButtonVariant;
		children: any;
		others?: any;
	}

	let {
		href,
		className = '',
		fontSize,
		variant = 'fill',
		children,
		...others
	}: ButtonLinkPropsType = $props();

	const buttonLinkVariantClasses = {
		fill: clsx(
			'flex cursor-pointer items-center justify-center rounded-xl text-slate-200 bg-orange-600/95 border-2 border-orange-500 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-orange-600/40',
			fontSize,
			className
		),
		outline: clsx(
			'flex cursor-pointer items-center justify-center rounded-xl text-slate-200 border-2 border-gray-800/80 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40',
			fontSize,
			className
		)
	};

	const buttonLinkClasses = clsx(buttonLinkVariantClasses[variant], className);
</script>

<a {href} class={buttonLinkClasses} {...others}>
	{@render children()}
</a>
