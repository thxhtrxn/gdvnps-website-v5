<script lang="ts">
	import clsx from 'clsx';
	import type { TailwindFontSizeClass } from '$lib';

	type ButtonVariant = 'fill' | 'outline';

	interface ButtonPropsType {
		label: string;
		className?: string;
		onClickFn?: () => void;
		fontSize?: TailwindFontSizeClass | string;
		variant?: ButtonVariant;
		children: any;
		others?: any;
	}

	let {
		label,
		className = '',
		onClickFn,
		fontSize,
		variant = 'fill',
		children,
		...others
	}: ButtonPropsType = $props();

	const buttonVariantClasses = {
		fill: clsx('no-underline hover:underline bg-red-500', fontSize, className),
		outline: clsx(
			'flex cursor-pointer items-center justify-center rounded-xl border-2 border-gray-800/80 p-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/53',
			fontSize,
			className
		)
	};
</script>

<button class={buttonVariantClasses[variant]} onclick={onClickFn} {...others}>
	{@render children()}
</button>
