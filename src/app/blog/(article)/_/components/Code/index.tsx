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
  const splitCode = children.split(/\n/);
  const filterCode = splitCode.filter(
    (_, index) => index && index + 1 !== splitCode.length,
  );

  const firstLine = filterCode[0];
  const space = (firstLine.match(/^\s*/) as RegExpMatchArray)[0].length ?? 0;

  const spaceReg = new RegExp(`^\\s{${space}}`);

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
