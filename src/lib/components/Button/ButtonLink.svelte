<script lang="ts">
	import clsx from 'clsx';
	import type { TailwindFontSizeClass } from '$lib';

	type ButtonVariant = 'fill' | 'outline';

	interface ButtonLinkPropsType {
		href: string | undefined;
		label: string;
		className?: string;
		fontSize?: TailwindFontSizeClass | string;
		variant?: ButtonVariant;
		children: any;
		others?: any;
	}

	let {
		href,
		label,
		className,
		fontSize,
		variant = 'fill',
		children,
		...others
	}: ButtonLinkPropsType = $props();

	const buttonLinkVariantClasses = {
		fill: clsx('no-underline hover:underline bg-red-500 px-1.5 py-1', fontSize, className),
		outline: clsx(
			'flex cursor-pointer items-center justify-center rounded-lg px-1.5 py-1 border-2 border-gray-800/80 p-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40',
			fontSize,
			className
		)
	};

	const buttonLinkClasses = clsx(buttonLinkVariantClasses[variant], className);
</script>

<a {href} class={buttonLinkClasses} {...others}>
	{@render children()}
</a>
