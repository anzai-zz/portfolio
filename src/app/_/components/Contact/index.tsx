"use client";

import post from "./actions/post";
import useForm from "./hooks/useForm";

import * as styles from "./styles/index.css";

export default function Page() {
  const { isPending, formState, formAction, onSubmit } = useForm(post, {
    error: false,
  });

  return (
    <form
      action={formAction}
      key={formState?.success ? "reset" : ""}
      onSubmit={onSubmit}
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
      {formState?.error && <p className={styles.error}>エラーです</p>}
      {formState?.success && <p className={styles.success}>送信完了しました</p>}
      <button className={styles.submit} type="submit" disabled={isPending}>
        {isPending ? "送信中..." : "送信"}
      </button>
    </form>
  );
}
