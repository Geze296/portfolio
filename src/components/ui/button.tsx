import Link from "next/link";

type Variant = "solid" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  solid:
    "bg-ink text-paper hover:bg-accent hover:text-accent-ink border border-ink hover:border-accent",
  outline: "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-accent px-0!",
};

type Props = {
  href: string;
  variant?: Variant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/** Link styled as a button, with an icon that nudges on hover. */
export function ButtonLink({ href, variant = "solid", icon, children, className = "", external, ...rest }: Props) {
  const cls = `group inline-flex h-12 items-center gap-3 px-5 text-[0.92rem] font-medium tracking-[-0.01em] transition-colors duration-300 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      ) : null}
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center border border-line px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-ink-2 ${className}`}>
      {children}
    </span>
  );
}
