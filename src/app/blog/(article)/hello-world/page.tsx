import type { Metadata } from "next";

import Article from "../_/components/Article";
import P from "../_/components/P";
import Section from "../_/components/Section";
import Title from "../_/components/Title";
// import B from "../_/components/B";

import type { TagSlug } from "@_/data/tag";

const id = "hello-world";
const title = "ポートフォリオを作成しました";
const tag: TagSlug[] = ["news"];
const color = "#f25a7b";

const update = "2024-04-05";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color} update={update}>
      <P>会社を辞めフリーランスになったのでポートフォリオを作成しました。</P>
      <P>
        今後は、フリーのフロントエンドエンジニアとして個人で活動していきます。
        <br />
        以下は、興味ある方がもしいれば今までの経歴など。
      </P>
      <Section>
        <Title>経歴</Title>
        <P>
          福島県出身。大学受験で1年浪人し東北大学に入学。その後、いろいろあり退学。
        </P>
        <P>
          個別指導塾のアルバイトを開始。人に勉強を教えるというのが面白く、その様子が塾長の目に留まったようで、半年ほどでそのままその塾の塾長として正社員に昇格。最初の3年ぐらいは仕事が楽しく、休みも返上して子供たちを教えることに熱中。しかし、受験が近くなると1日14時間、80連勤みたいなことを毎年行っていたことと、会社の売り上げノルマを達成するというのが精神的にも体力的にもきつくなり、このままではヤバいと思い退職。
        </P>
        <P>
          塾長時代に始めたアメーバブログがきっかけでweb制作に興味を持ち、HTML、CSS、JavaScript、jQueryあたりをよく勉強していました。
        </P>
        <P>
          アメーバブログからWordPressに移行し、技術ブログを開始。（
          <a href="https://q-az.net/" target="_blank" rel="noreferrer">
            q-az
          </a>
          ）。更新は現在止まり中です。
        </P>
      </Section>
      <Section>
        <Title>前職（HP制作会社）</Title>
        <P>
          塾退職後、いくつかの派遣の仕事などを経てコーダーとしてホームページ制作会社に就職。
        </P>
        <P>
          WordPressの知識があったものの、就職した会社は「WordPressを使わずCMSをフルスクラッチで制作」という変わった会社でした。
          <br />
          レンタルサーバを使うものの、PHPのみでCMSをクライアントに合わせて開発し提供するという方針。
        </P>
        <P>
          コーダーとして入社したものの、PHPでのプログラム部分もやってみたくWordPressではないPHPのプログラムについて独学。最終的にはフレームワークなどを用いずMySQLとPHPだけでCMSや会員サイトを作成する仕事をしていました。
        </P>
        <P>
          SPAが流行り始めたころから、ReactとReact
          Routerを用いてSPAで管理画面を作成、APIはPHPで書きフロントエンド・バックエンド両方を担当。
        </P>
        <P>
          他には、Next、pageルーター、APIはGraphQLの構成で会員サイトを複数作成、運営等も行っていました。
        </P>
        <P>
          通常のレンタルサーバでHPを作成する際はwebpackを使ってReactをトランスパイルしたり、他GulpやSassやPugなどもその時々の流行で便利そうなものは使っていました。Vue、Nuxtも一時期利用をしていましたが、しばらく触っていないので知識は抜ていて、WordPressの知識もだいぶ前で止まっています。
        </P>
      </Section>
      <Section>
        <Title>その他</Title>
        <P>ポートフォリオ自体はNext製のappルーター、記事部分はpageファイルで作成したかったので、記事一覧を作成するのにsupabaseを使ってます。犬（トイプードル）1匹と猫（保護猫 ※黒猫ではない）2匹と生活中。</P>
      </Section>
    </Article>
  );
}

export const metadata: Metadata = { title };
