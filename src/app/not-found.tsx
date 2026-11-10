import Link from "next/link";
import { Nav } from "@/components/layout/nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="shell flex min-h-dvh flex-col justify-center pt-[4.5rem]">
        <p className="label mb-6 text-muted">Error 404</p>
        <h1 className="display text-[clamp(3rem,10vw,8rem)]">
          Page not <span className="serif-accent text-accent">found.</span>
        </h1>
        <p className="mt-6 max-w-md text-ink-2">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-10 inline-flex h-12 w-fit items-center bg-ink px-6 text-paper hover:bg-accent hover:text-accent-ink">
          Back to home
        </Link>
      </main>
    </>
  );
}
