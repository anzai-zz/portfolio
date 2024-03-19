import { basename } from "path";

import { glob } from "glob";


const blogList = async () => {
  const paths = await glob("src/app/blog/*");

  const list = await Promise.all(paths.map(async (path) => {
    const { metadata, entrydata } = await import(`@/app/blog/${basename(path)}/page`);

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

  return list;
};

export default blogList;