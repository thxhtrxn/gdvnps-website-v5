import Link from "next/link";
import clsx from "clsx";
import type { TailwindFontSizeClass, AnchorLinkTarget } from "~/utils";

type AnchorLinkVariant = "default" | "navigation" | "footer";

interface LinkComponentPropsType {
  href: string;
  children: React.ReactNode;
  target?: AnchorLinkTarget;
  className?: string;
  onClickFn?: () => void;
  fontSize?: TailwindFontSizeClass;
  variant?: AnchorLinkVariant;
}

export default function CustomLink({
  children,
  href = "",
  target = "_self",
  className = "",
  onClickFn,
  fontSize = "text-base",
  variant = "default",
  ...props
}: LinkComponentPropsType) {
  const linkVariantClasses: {
    default: string;
    navigation: string;
    footer: string;
  } = {
    default: clsx(
      "no-underline font-(family:--font-main) hover:underline",
      fontSize,
    ),
    navigation: clsx(
      "text-slate-300/90 font-(family:--font-main) transition-all duration-150 hover:text-slate-200/90",
      fontSize,
    ),
    footer: clsx(
      "text-left text-base font-(family:--font-main) text-slate-300/90 transition-all duration-150 hover:text-slate-200/90",
      fontSize,
    ),
  };

  const linkClasses = clsx(
    "text-slate-300",
    linkVariantClasses[variant],
    className,
  );

  return (
    <Link
      href={href || "#"}
      target={variant === "default" ? target : undefined}
      onClick={onClickFn}
      className={linkClasses}
      {...props}
    >
      {children}
    </Link>
  );
}
