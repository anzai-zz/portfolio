"use client";

import { useFormStatus } from "react-dom";

import * as styles from "./styles/index.css"

export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <button className={styles.submit} type="submit" disabled={pending}>
      {pending ? "送信中..." : "送信"}
    </button>
  );
}