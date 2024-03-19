import type { Metadata } from "next";

import type Entrydata from "@/app/_/types/Entrydata";

export const metadata: Metadata = {
  title: "test2",
};

export const entrydata: Entrydata = {
  date: "2024-03-18",
  tag: ["other"],
};

export default function Page() {

  return (
    <h1>{metadata.title}</h1>
  );
}