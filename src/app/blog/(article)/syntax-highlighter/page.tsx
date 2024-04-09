import type { Metadata } from "next";

import Article from "../_/components/Article";
// import B from "../_/components/B";
import Code from "../_/components/Code";

import type { TagSlug } from "@_/data/tag";

// import * as styles from "./_/styles/index.css";

const id = "syntax-highlighter";
const title = "シンタックスハイライターを作る";
const tag: TagSlug[] = ["react"];
const color = "#80fd9f";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color}>
      <Code language="TypeScript">{`
        import clsx from "clsx";
        import highlight from "highlight.js";
        import { Source_Code_Pro } from "next/font/google";

        import "highlight.js/styles/intellij-light.min.css";
        import * as styles from "./styles/index.css";

        const inter = Source_Code_Pro({ weight: ["400", "700"], subsets: ["latin"] });

        type Props = {
          children: string;
          language: "TypeScript" | "JavaScript" | "CSS" | "HTML";
        };

        export default function Code({ children, language }: Props) {
          // 改行ごとに分割
          const splitCode = children.split(/\n/);

          // 最初と最後の行はカット
          const filterCode = splitCode.filter(
            (_, index) => index && index + 1 !== splitCode.length,
          );

          // 最初の行のスペースを数える
          const firstLine = filterCode[0];
          const space = (firstLine.match(/^\s*/) as RegExpMatchArray)[0].length ?? 0;

          const spaceReg = new RegExp(\`^\\s{\${space}}\`);

          // 全行スペースを削除
          const cutCode = filterCode.map((line) => line.replace(spaceReg, ""));

          return (
            <div>
              <h3 className={styles.title}>{language}</h3>
              <code className={clsx(inter.className, styles.code)}>
                {cutCode.map((line, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <p
                        className={styles.text}
                        dangerouslySetInnerHTML={{
                          __html: highlight.highlight(line, { language }).value,
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
    </Article>
  );
}

export const metadata: Metadata = { title };
