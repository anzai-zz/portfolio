"use client";

import { useFormState, useFormStatus } from "react-dom";

import post from "./_/actions/post";


function Submit() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "送信中..." : "送信"}
    </button>
  );
}


export default function Page() {
  const [result, dispatch] = useFormState(post, { error: false });


  return (
    <form action={dispatch} key={result?.success ? "reset" : ""}>
      <input type="text" name="name" className="border" required />
      {/* <input type="email" name="email" required /> */}
      {result?.error && <p>エラーです</p>}
      {result?.success && <p>送信完了しました</p>}
      <Submit />
    </form>
  );
}