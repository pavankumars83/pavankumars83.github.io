type BadgeVariant = "default" | "accent" | "muted" | "outline" | "success";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:  "bg-ink text-bone",
  accent:   "bg-accent-light text-accent",
  muted:    "bg-bone-2 text-muted",
  outline:  "bg-transparent border border-border text-muted",
  success:  "bg-emerald-50 text-emerald-700",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center label px-3 py-1 rounded-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
