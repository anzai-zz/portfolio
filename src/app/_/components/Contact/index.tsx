"use client";

import { useFormState } from "react-dom";
// import { useActionState } from "react";

import post from "./actions/post";
import Input from "./components/Input";
import Submit from "./components/Submit";

import * as styles from "./styles/index.css";

export default function Page() {
  const [state, dispatch] = useFormState(post, {
    error: false,
  });

  // const [state, dispatch, isPending] = useActionState(post, {
  //   error: false,
  // });

  return (
    <form
      action={dispatch}
      key={state?.success ? "reset" : ""}
      aria-labelledby="formTitle"
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <label className={styles.label}>
            <span className={styles.head}>お名前</span>
            <Input
              name="name"
              required
              title="お名前"
              autoComplete="name"
            />
          </label>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>
            <span className={styles.head}>メールアドレス</span>
            <Input
              type="email"
              name="email"
              required
              title="メールアドレス"
              autoComplete="email"
            />
          </label>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>
            <span className={styles.head}>お問い合わせ内容</span>
            <textarea
              className={styles.textarea}
              name="content"
              required
              aria-required="true"
              title="お問い合わせ内容"
            />
          </label>
        </li>
      </ul>
      {state?.error && <p className={styles.error}>エラーです</p>}
      {state?.success && <p className={styles.success}>送信完了しました</p>}
      <Submit />
    </form>
  );
}
