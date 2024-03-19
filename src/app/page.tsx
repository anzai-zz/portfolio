import Link from "next/link";

import blogList from "./_/libs/blogList";

export default async function Page() {
  const list = await blogList();

  return (
    <ul>
      {
        list.map(({ title, link, date }) => {
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
  );
}
