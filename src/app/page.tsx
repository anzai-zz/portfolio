import Blog from "@_/components/Blog";
import Contact from "@_/components/Contact";
import More from "@_/components/More";
import Profile from "@_/components/Profile";
import SectionTitle from "@_/components/SectionTitle";

import * as styles from "@_/styles/page.css";

export default function Page() {
  return (
    <>
      <section className={styles.section}>
        <SectionTitle>blog</SectionTitle>
        <Blog max={3} />
        <More href="/blog/">一覧へ</More>
      </section>
      <section className={styles.section}>
        <SectionTitle>profile</SectionTitle>
        <Profile />
      </section>
      <section>
        <SectionTitle id="formTitle">contact</SectionTitle>
        <Contact />
      </section>
    </>
  );
}
