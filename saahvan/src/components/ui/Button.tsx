import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark border border-accent hover:border-accent-dark",
  secondary:
    "bg-ink text-bone hover:bg-ink-2 border border-ink hover:border-ink-2",
  ghost:
    "bg-transparent text-ink hover:bg-ink hover:text-bone border border-border hover:border-ink",
  outline:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-white",
};

const sizes: Record<Size, string> = {
  sm:  "px-4 py-2 text-sm gap-1.5",
  md:  "px-6 py-3 text-sm gap-2",
  lg:  "px-8 py-4 text-base gap-2.5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 select-none";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
}
