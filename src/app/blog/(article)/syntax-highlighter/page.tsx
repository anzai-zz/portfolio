import type { Metadata } from "next";

import Article from "../_/components/Article";
import Code from "../_/components/Code";
import P from "../_/components/P";
import Section from "../_/components/Section";
import Title from "../_/components/Title";

import type { TagSlug } from "@_/data/tag";

// import * as styles from "./_/styles/index.css";

const id = "syntax-highlighter";
const title = "シンタックスハイライターを作る";
const tag: TagSlug[] = ["react", "ts"];
const color = "#80fd9f";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color}>
      <P>シンタックスハイライトしたいので専用のコンポーネントを作ります。</P>
      <Section>
        <Title>コンポーネント</Title>
        <Code title="TypeScript" language="tsx">{`
          import clsx from "clsx";
          import { Source_Code_Pro } from "next/font/google";

          import Prism from 'prismjs';

          import "prismjs/components/prism-typescript.min";
          import "prismjs/components/prism-jsx.min";
          import "prismjs/components/prism-tsx.min";

          import "prismjs/themes/prism-coy.min.css";
          import * as styles from "./styles/index.css";

          const inter = Source_Code_Pro({ weight: ["400", "700"], subsets: ["latin"] });

          type Props = {
            children: string;
            language: "javascript" | "typescript" |"jsx" | "tsx";
            title?: string;
          };

          export default function Code({ children, title, language }: Props) {
            const hightlightCode = Prism.highlight(children, Prism.languages[language], language);

            // 改行ごとに分割
            const splitCode = hightlightCode.split(/\\n/);

            // 最初と最後の行はカット
            const filterCode = splitCode.filter(
              (_, index) => index && index + 1 !== splitCode.length,
            );

            // 最初の行のスペースを数える
            const firstLine = filterCode[0];
            const space = (firstLine.match(/^\\s*/) as RegExpMatchArray)[0].length ?? 0;

            // 全行スペースを削除
            const spaceReg = new RegExp(\`^\\\\s{\${space}}\`);
            const cutCode = filterCode.map((line) => line.replace(spaceReg, ""));

            return (
              <div>
                {title ? <h3 className={styles.title}>{title}</h3> : undefined}
                <code className={clsx(inter.className, styles.code)}>
                  {cutCode.map((line, index) => {
                    return (
                      <div key={index} className={styles.item}>
                        <p
                          className={styles.text}
                          dangerouslySetInnerHTML={{
                            __html: line,
                          }}
                        />
                      </div>
                    );
                  })}
                </code>
              </div>
            );
          }
        `}</Code>
      </Section>
      <Section>
        <Title>style</Title>
        <Code title="TypeScript" language="typescript">{`
          import { css } from "@linaria/core";

          import { pc } from "@_/styles/mediaquery";

          export const title = css\`
            text-align: right;
            font-size: 1.6rem;
            margin: 0 0 5px;

            \${pc} {
              font-size: 1.8rem;
            }
          \`;

          export const code = css\`
            white-space: pre;
            counter-reset: code;

            ::selection {
              background-color: var(--color);
              color: inherit;
            }
          \`;

          export const item = css\`
            min-height: calc(1lh + 10px);
            display: grid;
            grid-template-columns: 30px 1fr;
            gap: 15px;
            font-size: 1.4rem;

            &::before {
              content: counter(code);
              counter-increment: code;
              display: grid;
              place-items: center;
              font-size: 1.4rem;
            }

            &:nth-of-type(2n+1) {
              background-color: color-mix(in srgb, var(--color) 30%, transparent);

              &::before {
                background-color: var(--color);
              }
            }

            &:nth-of-type(2n) {
              background-color: color-mix(in srgb, var(--color) 15%, transparent);

              &::before {
                background-color: color-mix(in srgb, var(--color) 50%, transparent);
              }
            }
          \`;

          export const text = css\`
            padding: 5px 15px 5px 0;
            overflow-x: auto;

            &::-webkit-scrollbar {
              height: 4px;
            }

            &::-webkit-scrollbar-track {
              height: 12px;
              background-color: transparent;
            }

            &::-webkit-scrollbar-thumb {
              background-color: var(--color);
            }
          \`;
        `}</Code>
      </Section>
      <Section>
        <Title>使い方</Title>
        <Code title="TypeScript" language="tsx">{`
          <Code title="TypeScript" language="tsx">{\`
            import clsx from "clsx";
            import highlight from "highlight.js";
            import { Source_Code_Pro } from "next/font/google";

            import "highlight.js/styles/intellij-light.min.css";
            import * as styles from "./styles/index.css";

            const inter = Source_Code_Pro({ weight: ["400", "700"], subsets: ["latin"] });

            …
          \`}</Code>
        `}</Code>
      </Section>
    </Article>
  );
}

export const metadata: Metadata = { title };
