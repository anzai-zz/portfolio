import type { Metadata } from "next";

import type Entrydata from "@/app/_/types/Entrydata";

export const metadata: Metadata = {
  title: "test",
};

export const entrydata: Entrydata = {
  date: "2024-03-19",
  tag: ["other"],
};

export default function Page() {

  return (
    <p>test</p>
  );
}

