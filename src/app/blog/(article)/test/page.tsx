import type { Metadata } from "next";

import type Entrydata from "@/app/_/types/Entrydata";

export const metadata: Metadata = {
  title: "test",
};

export const entrydata: Entrydata = {
  date: "2024-03-19",
  tag: ["other"],
};

function Date({ children }) {
  return (
    <p>{children}</p>
  );
}

export default function Page() {

  return (
    <>
      <h1>{metadata.title}</h1>
      <Date>2024-03-19</Date>
    </>
  );
}

