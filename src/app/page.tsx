import Blog from "@_/components/Blog";
import More from "@_/components/More";
import SectionTitle from "@_/components/SectionTitle";
import Profile from "@_/components/Profile";
import Contact from "@_/components/Contact";

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
