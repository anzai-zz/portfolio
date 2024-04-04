"use server";

import * as v from "valibot";

import mail from "@src/app/_/utils/mail";

export default async function postAction(_prev: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");

  if (!(name && email && content)) {
    return {
      error: true,
    };
  }

  try {
    v.parse(v.string([v.email()]), email);

    await mail.sendMail({
      from: email as string,
      to: "mail@kuronekono.me",
      subject: "お問い合わせフォームより",
      text: `
お名前：${name}
メールアドレス：${email}

お問い合わせ内容：
${content}
`.trim(),
    });
  } catch (error) {
    console.error(error);
    return {
      error: true,
    };
  }

  return {
    success: true,
  };
}
