import type { Metadata } from "next";

import Article from "../_/components/Article";

import type { TagSlug } from "@_/data/tag";

const id = "hello-world";
const title = "ポートフォリオを開設しました";
const tag: TagSlug[] = ["news"];
const color = "#f25a7b";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color}>
      <p>会社を辞めフリーランスになったのでポートフォリオを作成しました。</p>
      <p>
        今後は、フリーのフロントエンドエンジニアとしていろいろお仕事をしていきたいので、よろしくお願いします。
      </p>
    </Article>
  );
}

export const metadata: Metadata = { title };
