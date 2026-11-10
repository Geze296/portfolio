import { cacheLife } from "next/cache";

/** Current year. Cached and revalidated daily so the static shell never goes stale. */
export async function Year() {
  "use cache";
  cacheLife("days");
  return <span>{new Date().getFullYear()}</span>;
}
