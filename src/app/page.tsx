import Link from "next/link";

import blogList from "./_/libs/blogList";

export default async function Page() {
  const list = await blogList();

  return (
    <ul>
      {
        list.map(({ title, link, date }) => {
          return (
            <li key={link}>
              <Link href={link}>
                <time>{date}</time>
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}
