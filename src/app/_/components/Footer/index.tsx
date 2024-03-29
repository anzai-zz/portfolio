import Image from "next/image";

import me from "@_/images/me.svg";

import * as styles from "./styles/index.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.neko}>
        <Image src={me} alt="みー" />
      </div>
      <small className={styles.copyright}>© kuronekono.me</small>
    </footer>
  );
}
