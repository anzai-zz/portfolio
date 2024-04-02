import type React from "react";

import * as styles from "./styles/index.css";

type Props = {
  children: React.ReactNode,
};

export default function Title({ children }: Props) {
  return (
    <h2 className={styles.title}>{children}</h2>
  );
}