import clsx from "clsx";
import Link from "next/link";

import type React from "react";

import * as styles from "./styles/index.css";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function More({ href, className, children }: Props) {
  return (
    <Link href={href} className={clsx(styles.more, className)}>
      {children}
    </Link>
  );
}
