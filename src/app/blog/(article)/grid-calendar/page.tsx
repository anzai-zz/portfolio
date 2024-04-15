import Image from "next/image";

import type { Metadata } from "next";

import Article from "../_/components/Article";
import P from "../_/components/P";
import Section from "../_/components/Section";
import Title from "../_/components/Title";
// import B from "../_/components/B";
import Calendar from "./_/components/Calendar";


import type { TagSlug } from "@_/data/tag";

import * as styles from "./_/styles/page.css";

const id = "grid-calendar";
const title = "カレンダーニューはGridで作る";
const tag: TagSlug[] = ["news"];
const color = "#f25a7b";

const update = "2024-04-05";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color} update={update}>
      <Calendar />

    </Article>
  );
}

export const metadata: Metadata = { title };
