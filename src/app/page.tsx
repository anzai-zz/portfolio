import Link from "next/link";

import Blog from "@_/components/Blog";

export default async function Page() {

  return (
    <>
      <Blog max={1} />
      <Link href="/blog/">一覧へ</Link>
    </>
  );
}
