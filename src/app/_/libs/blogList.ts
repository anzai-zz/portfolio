import { basename } from "path";

import { glob } from "glob";


const blogList = async () => {
  const paths = await glob("src/app/blog/*");

  const list = await Promise.all(paths.map(async (path) => {
    const { metadata } = await import(`@/app/blog/${basename(path)}/page`);

    return {
      title: metadata.title,
      link: `/blog/${basename(path)}/`,
    };
  }));

  return list;
}

export default blogList;