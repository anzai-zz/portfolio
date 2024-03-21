import React from "react";

import Link from "next/link";
import { basename } from "node:path";
import { glob } from "glob";

import Pagination from "@_/components/Pagination";

type Props = {
  page?: number,
  max: number,
  tag?: string,
  pagination?: boolean,
};

export default async function Blog({ page = 1, max, tag, pagination = false }: Props) {
  console.log(tag);

  const paths = await glob("src/app/blog/(article)/*", { ignore: "**/*.tsx" });

  const list = await Promise.all(paths.map(async (path) => {
    const { default: myDefault, metadata, entrydata } = await import(`@/app/blog/(article)/${basename(path)}/page`);


    return {
      title: metadata.title as string,
      date: entrydata.date as string,
      tag: entrydata.tag as string[],
      link: `/blog/${basename(path)}/`,
    };
  }));

  // 日付順
  list.sort((a, b) => {
    return a.date <= b.date ? 1 : -1;
  });

  // 件数


  // タグで絞り込み
  const filterList = tag ? list.filter((item) => {
    return item.tag.includes(tag);
  }) : list;

  const sliceList = filterList.slice(max * (page - 1), max * page);

  return (
    <>
      <ul>
        {
          sliceList.map(({ title, link, date }) => {
            return (
              <li key={link} className="border-b border-b-gray">
                <Link href={link} className="block p-4">
                  <time className="mb-2 block">{date}</time>
                  <h3 className="font-bold text-lg">{title}</h3>
                </Link>
              </li>
            );
          })
        }
      </ul>
      {pagination && <Pagination list={filterList} href={tag ? `/blog/tag/${tag}/` : "/blog/"} page={page} max={max} />}
    </>
  );
}