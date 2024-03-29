import Link from "next/link";

import * as styls from "./styles/index.css";

export default function Header() {
  return (
    <header className={styls.header}>
      <h1>
        <Link className={styls.link} href="/">
          くろねこのみー
        </Link>
      </h1>
    </header>
  );
}
