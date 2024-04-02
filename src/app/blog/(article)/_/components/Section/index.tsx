import type React from "react";

import * as styles from "./styles/index.css";

type Props = {
  children: React.ReactNode,
};

export default function Section({ children }: Props) {
  return (
    <section className={styles.section}>{children}</section>
  );
}