import Link from "next/link";
import { site } from "@/content/site";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
      <span className="relative inline-flex size-10 items-center justify-center bg-ink text-paper transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink">
        <span className="serif-accent text-[1.35rem] leading-none">g</span>
        <span className="absolute right-[7px] bottom-[8px] size-[5px] bg-accent transition-colors group-hover:bg-paper" />
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="text-[0.98rem] leading-none font-medium tracking-[-0.02em]">{site.name}</span>
        <span className="label text-[0.6rem]! leading-none text-muted">{site.tagline}</span>
      </span>
    </Link>
  );
}
