"use client";

import { useFormState } from "react-dom";

import post from "./actions/post";
import Submit from "./components/Submit";

import * as styles from "./styles/index.css";

export default function Page() {
  const [state, dispatch] = useFormState(post, {
    error: false,
  });

  return (
    <form
      action={dispatch}
      key={state?.success ? "reset" : ""}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <label className={styles.label}>
            <span className={styles.head}>お名前</span>
            <input className={styles.input} type="text" name="name" required />
          </label>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>
            <span className={styles.head}>メールアドレス</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              required
            />
          </label>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>
            <span className={styles.head}>お問い合わせ内容</span>
            <textarea className={styles.textarea} name="content" required />
          </label>
        </li>
      </ul>
      {state?.error && <p className={styles.error}>エラーです</p>}
      {state?.success && <p className={styles.success}>送信完了しました</p>}
      <Submit />
    </form>
  );
}
