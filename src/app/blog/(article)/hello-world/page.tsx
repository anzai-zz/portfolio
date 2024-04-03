import type { Metadata } from "next";

import Article from "../_/components/Article";
import P from "../_/components/P";
import Section from "../_/components/Section";
import Title from "../_/components/Title";
import B from "../_/components/B";

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
        <P>福島県の進学校でしたが、管弦楽部の活動でコントラバスにはまり、大学受験で1年浪人。その浪人を経て東北大学に入学しました。<br />理学部の数学科に入学したものの、オーケストラ部に結局入り、演奏・練習漬けの毎日。勉強もほとんどしなかったので結局卒業できず、親不孝ですが退学することになりました。</P>
        <P>その後、縁あって個別指導塾のアルバイトを開始。人に勉強を教えるというのが面白く、それが塾長の目に留まったみたいで、そのままその塾の塾長として正社員に昇格。最初の3年ぐらいは仕事が楽しく、休みも返上して子供たちを教えることにのめりこんでいました。生徒の受験が近くなると1日14時間、80連勤みたいなことを行いつつも、上からくる上がっていくノルマを達成するというのが精神的にも体力的にも年々きつくなり結局退職。</P>
        <P>web制作との出会いはアメブロでブログを書き始めたことが由来です。アメブロというのはいくつかテンプレートみたいのがあるのですが、そのどのテンプレートともつかないデザインのアメブロに出会い、「これって自由に変更できるんだ！」と知ったのが始まり。そのブログが偶然今でいう技術ブログのような感じでアメブロをCSSでカスタマイズしまくる、みたいな感じのブログでそこでHTMLとCSSを勉強しました。当時はまだギリギリIE6が存在してたり、jQueryが世に出てきたばかりだったり、Google Chromeが世に生まれたりしてたタイミングでした。</P>
        <P>その後、アメブロからレンタルサーバを借りてWordPressでブログを作成。そのまましばらく技術ブログをやってました。今みたいにQiitaがあったりZennがあったりではなかったので、技術ブログするならWordPress作るか、はてなブログでやるかみたいな感じだった気がします。</P>
      </Section>
      <Section>
        <Title>前職（HP制作会社）</Title>
        <P>上記のような経験を活かしたいなと思ったので、HP制作会社を探し、入社することができました。</P>
        <P>当時のWordPressの知識があったものの、就職した会社は「WordPressを使わずCMSをフルスクラッチで制作」という変わった会社でした。<br />レンタルサーバを使うものの、PHPのみでCMSをクライアントに合わせて開発し提供する会社でした。</P>
        <P>「コーダー」として入社したものの、PHPでのプログラム部分もやってみたく独学。最終的にはフレームワークなどを用いずMySQLとPHPだけでCMSや会員サイトを作成できるレベルの仕事まで行っていました。</P>
        <P>また、<B>PHPのみでゴリゴリのCMS</B>も作成していたのですが、ReactとReact Routerを用いてSPAで管理画面を作成し、レンタルサーバが主なクライアントの環境だったこともあり、APIはPHPで書き、それをSPA側で受けてCMSを作成していました。</P>
        <P></P>
      </Section>
    </Article>
  );
}

export const metadata: Metadata = { title };
