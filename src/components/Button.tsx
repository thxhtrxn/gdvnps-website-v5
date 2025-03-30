import Link from "next/link";
import clsx from "clsx";
import type { TailwindFontSizeClass } from "~/utils";

type ButtonVariant = "fill" | "outline";

interface ButtonPropsType {
  className?: string;
  onClickFn?: () => void;
  fontSize?: TailwindFontSizeClass;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({
  className = "",
  onClickFn,
  fontSize,
  variant = "fill",
  children,
  ...props
}: ButtonPropsType) {
  const buttonVariantClasses: { fill: string; outline: string } = {
    fill: clsx(
      "no-underline font-(family:--font-main) hover:underline bg-red-500",
      fontSize,
      className,
    ),
    outline: clsx(
      "flex cursor-pointer font-(family:--font-main) items-center justify-center rounded-xl border-2 border-gray-800/80 p-1 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/53",
      fontSize,
      className,
    ),
  };

  return (
    <button
      className={buttonVariantClasses[variant]}
      onClick={onClickFn}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkPropsType {
  href: string;
  className?: string;
  fontSize?: TailwindFontSizeClass;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  className = "",
  fontSize,
  variant = "fill",
  children,
  ...props
}: ButtonLinkPropsType) {
  const buttonLinkVariantClasses: { fill: string; outline: string } = {
    fill: clsx(
      "flex cursor-pointer font-(family:--font-main) items-center justify-center rounded-xl text-slate-200 bg-orange-600/95 border-2 border-orange-500 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-orange-600/40",
      fontSize,
      className,
    ),
    outline: clsx(
      "flex cursor-pointer font-(family:--font-main) items-center justify-center rounded-xl text-slate-200 border-2 border-gray-800/80 shadow backdrop-blur-lg duration-150 hover:border-gray-800/90 hover:bg-zinc-900/40",
      fontSize,
      className,
    ),
  };
  const buttonLinkClasses = clsx(buttonLinkVariantClasses[variant], className);

  return (
    <Link href={href || "#"} className={buttonLinkClasses} {...props}>
      {children}
    </Link>
  );
}
