import type React from "react";

import * as styles from "./styles/index.css";

type Props = {
  children: React.ReactNode;
  id?: string;
};

export default function SectionTitle({ children, id }: Props) {
  return (
    <h2 className={styles.title} id={id}>
      {children}
    </h2>
  );
}
