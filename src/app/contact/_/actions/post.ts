"use server";

import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function postAction(prev: any, formData: FormData) {
  const name = formData.get("name");

  if (!name) {
    return {
      error: true,
    };
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "mail@kuronokono.me",
      subject: "お問い合わせ",
      text: `
名前：${name}
`,
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