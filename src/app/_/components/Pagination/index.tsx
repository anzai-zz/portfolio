import Link from "next/link";

import * as styles from "./styles/index.css";

type Props = {
  all: number;
  href: string;
  page?: number;
  max: number;
};

export default function Pagination({ all, href, page = 1, max }: Props) {
  return (
    <ol className={styles.pagination}>
      <li className={styles.item}>
        {page !== 1 && (
          <Link
            className={styles.link}
            href={`${href}${page !== 2 ? page - 1 : ""}`}
          >
            前へ
          </Link>
        )}
      </li>
      <li className={styles.item}>
        {all > max * page && (
          <Link className={styles.link} href={`${href}${page + 1}`}>
            次へ
          </Link>
        )}
      </li>
    </ol>
  );
}
