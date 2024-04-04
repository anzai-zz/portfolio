import type { Metadata } from "next";

import Article from "../_/components/Article";
import P from "../_/components/P";
import Section from "../_/components/Section";
import Title from "../_/components/Title";
// import B from "../_/components/B";

import type { TagSlug } from "@_/data/tag";

const id = "hello-world";
const title = "ポートフォリオを開設しました";
const tag: TagSlug[] = ["news"];
const color = "#f25a7b";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color}>
      <P>会社を辞めフリーランスになったのでポートフォリオを作成しました。</P>
      <P>今後は、フリーのフロントエンドエンジニアとして個人で活動していきます。<br />以下は、興味ある方がもしいれば今までの経歴など。</P>
      <Section>
        <Title>経歴</Title>
        <P>福島県出身。大学受験で1年浪人し東北大学に入学。その後、いろいろあり退学。</P>
        <P>個別指導塾のアルバイトを開始。人に勉強を教えるというのが面白く、その様子が塾長の目に留まったようで、そのままその塾の塾長として正社員に昇格。最初の3年ぐらいは仕事が楽しく、休みも返上して子供たちを教えることに熱中していました。受験が近くなると1日14時間、80連勤みたいなことを行いつつも、会社の売り上げノルマを達成するというのが精神的にも体力的にもきつくなり、このままではやばいと思い退職。</P>
        <P>塾長時代に始めたアメーバブログがきっかけでweb制作に興味を持つ。HTML、CSS、JavaScript、jQueryあたりをよく勉強していました。</P>
        <P>アメーバブログからWordPressに移行し、技術ブログを開始。（<a href="https://q-az.net/" target="_blank" rel="noreferrer">q-az</a>）。しばらく更新はしてません。</P>
      </Section>
      <Section>
        <Title>前職（HP制作会社）</Title>
        <P>塾長退職後、いくつかの派遣の仕事などを経てコーダーとしてホームページ制作会社に就職。</P>
        <P>WordPressの知識があったものの、就職した会社は「WordPressを使わずCMSをフルスクラッチで制作」という変わった会社でした。<br />レンタルサーバを使うものの、PHPのみでCMSをクライアントに合わせて開発し提供方針の制作会社。</P>
        <P>コーダーとして入社したものの、PHPでのプログラム部分もやってみたく独学。最終的にはフレームワークなどを用いずMySQLとPHPだけでCMSや会員サイトを作成する仕事まで行っていました。</P>
        <P>また、SPAが流行り始めたころから、ReactとReact Routerを用いてSPAで管理画面を作成、APIはPHPで書きフロントエンド・バックエンド両方を書いていました。</P>
        <P>Next.jsでpageルーター、APIはGraphQLで会員サイトを複数作成。運営。</P>
        <P>通常のレンタルサーバでHPを作成する場合はwebpackを使ってReactをトランスパイルすることが多く、他SassやPugなどのテンプレートの知識もあります。</P>
      </Section>
      <Section>
        <Title>その他</Title>
        <P>kuronekono.meというドメインは昔何かサービスを作成しようと思って取ったドメインですが結局作成せず、それをそのまま利用したのでそこまで深い意味はありません。犬（トイプードル）1匹と猫（保護猫）2匹と生活中。</P>
      </Section>
    </Article>
  );
}

export const metadata: Metadata = { title };
