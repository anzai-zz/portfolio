import clsx from "clsx";
import Image from "next/image";

import github from "./images/github.svg";
import photo from "./images/photo.svg";
import threads from "./images/threads.svg";
import x from "./images/x.svg";

import * as styles from "./styles/index.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.photo}>
        <Image src={photo} alt="誠意撮影中" loading="eager" />
      </div>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr className={styles.row}>
            <th className={styles.head}>居住地</th>
            <td className={styles.detail}>福島県</td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.head}>好きなこと</th>
            <td className={styles.detail}>
              <ul className={styles.skill}>
                <li className={styles.skillItem}>JavaScript</li>
                <li className={styles.skillItem}>TypeScript</li>
                <li className={styles.skillItem}>React</li>
                <li className={styles.skillItem}>Next</li>
                <li className={styles.skillItem}>HTML</li>
                <li className={styles.skillItem}>CSS</li>
              </ul>
            </td>
            <th className={styles.head}>出来ること</th>
            <td className={styles.detail}>
              <ul className={styles.skill}>
                <li className={styles.skillItem}>PHP</li>
                <li className={styles.skillItem}>SQL</li>
                <li className={styles.skillItem}>GraphQL</li>
                <li className={styles.skillItem}>webpack</li>
                <li className={styles.skillItem}>Astro</li>
              </ul>
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.head}>出来ないこと</th>
            <td className={clsx(styles.detail, styles.detailCol3)}>
              <ul className={styles.skill}>
                <li className={styles.skillItem}>デザイン</li>
              </ul>
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.head}>略歴</th>
            <td className={clsx(styles.detail, styles.detailCol3)}>
              <table className={styles.history}>
                <tbody>
                  <tr className={styles.historyRow}>
                    <th className={styles.historyHead}>2012 - 2016</th>
                    <td className={styles.historyDetail}>個別指導塾の塾長</td>
                  </tr>
                  <tr className={styles.historyRow}>
                    <th className={styles.historyHead}>2017 - 2024</th>
                    <td className={styles.historyDetail}>HP制作会社勤務</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.head}>SNS</th>
            <td className={clsx(styles.detail, styles.detailCol3)}>
              <ul className={styles.sns}>
                <li>
                  <a
                    href="https://twitter.com/gzzdino"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.snsIcon}
                  >
                    <Image src={x} alt="X" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.net/@zzdino"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.snsIcon}
                  >
                    <Image src={threads} alt="Threads" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/anzai-zz"
                    target="_blank"
                    rel="noreferrer"
                    className={clsx(styles.snsIcon, styles.snsGitHub)}
                  >
                    <Image src={github} alt="GitHub" />
                  </a>
                </li>
              </ul>
              {/* <p>
                <a href="https://q-az.net/" target="_blank" rel="noreferrer">
                  大昔の技術ブログ
                </a>
              </p> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
