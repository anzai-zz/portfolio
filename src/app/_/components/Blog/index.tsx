import { format } from "@formkit/tempo";
import Link from "next/link";

import type React from "react";

import Pagination from "@_/components/Pagination";
import prisma from "@_/utils/prisma";

import tagList, { type TagSlug } from "@_/data/tag";

import * as styles from "./styles/index.css";

type Props = {
  page?: number;
  max: number;
  tag?: TagSlug;
  pagination?: boolean;
};

export default async function Blog({
  page = 1,
  max,
  tag: tagSlug,
  pagination = false,
}: Props) {
  const where: { tag?: { has: TagSlug } } = {};

  if (tagSlug) {
    where.tag = {
      has: tagSlug,
    };
  }

  const all = await prisma.blog.count({ where });

  const list = await prisma.blog.findMany({
    where,
    orderBy: {
      updatedAt: "desc",
    },
    skip: max * (page - 1),
    take: max,
  });

  return (
    <>
      <ul>
        {list.map(({ title, id, tag, updatedAt, color }) => {
          return (
            <li key={id} className={styles.item}>
              <Link
                href={`/blog/${id}`}
                className={styles.link}
                style={{ "--color": color } as React.CSSProperties}
              >
                <div>
                  <div className={styles.info}>
                    <time
                      className={styles.time}
                      dateTime={format(updatedAt, "YYYY-MM-DD")}
                    >
                      {format(updatedAt, "long", "ja")}
                    </time>
                    {/* {tag ? (
                      <ul className={styles.tag}>
                        {tag.map((slug) => {
                          return (
                            <li key={slug} className={styles.tagItem}>
                              {tagList[slug as TagSlug]}
                            </li>
                          );
                        })}
                      </ul>
                    ) : undefined} */}
                  </div>
                  <h3 className={styles.title}>{title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {pagination && (
        <Pagination
          all={all}
          href={tagSlug ? `/blog/tag/${tagSlug}/` : "/blog/"}
          page={page}
          max={max}
        />
      )}
    </>
  );
}
