import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl active:scale-95",
  secondary:
    "bg-white hover:bg-gray-50 text-blue-700 border-2 border-blue-700 shadow hover:shadow-md active:scale-95",
  outline:
    "bg-transparent hover:bg-white/10 text-white border-2 border-white active:scale-95",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-200",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Link>
  );
}
