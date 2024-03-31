import { format } from "@formkit/tempo";
import Link from "next/link";

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
  tag: tagText,
  pagination = false,
}: Props) {
  const where: { tag?: { has: TagSlug } } = {};

  if (tagText) {
    where.tag = {
      has: tagText,
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
        {list.map(({ title, id, tag, updatedAt }) => {
          return (
            <li key={id} className={styles.item}>
              <Link href={`/blog/${id}`} className={styles.link}>
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
                          <li key={slug} className={styles.tagItem}>
                            {tagList[slug as TagSlug]}
                          </li>
                        );
                      })}
                    </ul>
                  ) : undefined}
                </div>
                <h3 className={styles.title}>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
      {pagination && (
        <Pagination
          all={all}
          href={tagText ? `/blog/tag/${tagText}/` : "/blog/"}
          page={page}
          max={max}
        />
      )}
    </>
  );
}
