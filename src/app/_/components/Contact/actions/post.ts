"use server";

import { createTransport } from "nodemailer";
import * as v from "valibot";

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function postAction(_prev: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");

  if (!name || !email || !content) {
    return {
      error: true,
    };
  }

  try {
    v.parse(v.string([v.email()]), email);

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "mail@kuronokono.me",
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
