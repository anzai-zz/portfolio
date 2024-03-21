import { glob } from "glob";

import Blog from "@_/components/Blog";

export const dynamic = "force-static";

const max = 10;

export async function generateStaticParams() {
  const paths = await glob("**/src/app/blog/(article)/*", { ignore: "**/layout.tsx" });

  const pages = Math.ceil(paths.length / max);

  const pagesArray = [...Array(pages)].map((_, i) => i + 1);

  return [{ page: [] }, pagesArray.map((number) => ({ page: [String(number)] }))];
}

type Props = {
  params: {
    page: number,
  }
};

export default async function Page({ params }: Props) {
  return (
    <Blog max={max} pagination page={params?.page ? Number(params.page) : undefined} />
  );
}