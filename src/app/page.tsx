import Link from "next/link";

import blogList from "./_/libs/blogList";

export default async function Page() {
  const list = await blogList();

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="flex items-center gap-3 justify-center">
        <span className="text-3xl">くろねこのみー</span>
      </h1>
      <ul>
        {
          list.map(({ title, link }) => {
            return (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            )
          })
        }
      </ul>
    </main>
  );
}
