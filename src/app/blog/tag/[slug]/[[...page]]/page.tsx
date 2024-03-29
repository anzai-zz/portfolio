import Blog from "@_/components/Blog";
import SectionTitle from "@_/components/SectionTitle";

import tagList, { type TagSlug } from "@_/data/tag";

type Props = {
  params: {
    page: number;
    slug: TagSlug;
  };
};

export default async function Page({ params }: Props) {
  return (
    <>
      <SectionTitle>「{tagList[params.slug]}」の記事</SectionTitle>
      <Blog
        max={1}
        pagination
        page={params?.page ? Number(params.page) : undefined}
        tag={params?.slug ?? undefined}
      />
    </>
  );
}
