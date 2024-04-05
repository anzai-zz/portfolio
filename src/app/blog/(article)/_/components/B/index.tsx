import type React from "react";

import * as styles from "./styles/index.css";

type Props = {
  children: React.ReactNode;
};

export default function B({ children }: Props) {
  return <b className={styles.b}>{children}</b>;
}
