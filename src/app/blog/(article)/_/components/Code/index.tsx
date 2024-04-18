import clsx from "clsx";
import { Source_Code_Pro } from "next/font/google";

import Prism from "prismjs";

import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-tsx.min";

import "prismjs/themes/prism-coy.min.css";
import * as styles from "./styles/index.css";

const inter = Source_Code_Pro({ weight: ["400", "700"], subsets: ["latin"] });

type Props = {
  children: string;
  language: "javascript" | "typescript" | "jsx" | "tsx" | "html" | "css";
  title?: string;
};

export default function Code({ children, title, language }: Props) {
  const hightlightCode = Prism.highlight(
    children,
    Prism.languages[language],
    language,
  );

  // 改行ごとに分割
  const splitCode = hightlightCode.split(/\n/);

  // 最初と最後の行はカット
  const filterCode = splitCode.filter(
    (_, index) => index && index + 1 !== splitCode.length,
  );

  // 最初の行のスペースを数える
  const firstLine = filterCode[0];
  const space = (firstLine.match(/^\s*/) as RegExpMatchArray)[0].length ?? 0;

  // 全行スペースを削除
  const spaceReg = new RegExp(`^\\s{${space}}`);
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
