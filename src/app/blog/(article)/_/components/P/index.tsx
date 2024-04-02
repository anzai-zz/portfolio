import type React from "react";

import * as styles from "./styles/index.css";

type Props = {
  children: React.ReactNode,
};

export default function P({ children }: Props) {
  return (
    <p className={styles.p}>{children}</p>
  );
}