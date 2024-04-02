import { format } from "@formkit/tempo";
import Link from "next/link";

import type React from "react";

import prisma from "@src/app/_/utils/prisma";

import tagList, { type TagSlug } from "@_/data/tag";

import * as styles from "./styles/index.css";

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
  update?: string;
  tag?: TagSlug[];
  color?: string,
  del?: boolean;
};

export default async function Article({
  children,
  id,
  title,
  update,
  tag,
  color = "#cc3b3b",
  del,
}: Props) {
  if (del) {
    await prisma.blog.delete({
      where: {
        id,
      },
    });

    return;
  }
  const { updatedAt } = await prisma.blog.upsert({
    where: {
      id,
    },
    update: {
      title,
      updatedAt: update ? `${update}T00:00:00+09:00` : undefined,
      tag,
      color,
    },
    create: {
      id,
      title,
      tag,
      color,
    },
  });

  return (
    <article>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        <time
          className={styles.time}
          dateTime={format(updatedAt, "YYYY-MM-DD")}
        >
          {format(updatedAt, "long", "ja")}
        </time>
        {tag ? (
          <ul className={styles.tag}>
            {tag.map((slug) => {
              return (
                <li key={slug}>
                  <Link className={styles.tagLink} href={`/blog/tag/${slug}`}>
                    {tagList[slug]}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : undefined}
      </div>
      {children}
    </article>
  );
}
