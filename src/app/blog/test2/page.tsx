import type { Metadata } from "next";

import type Entrydata from "@/app/_/types/Entrydata";

export const metadata: Metadata = {
  title: "test2",
};

export const entrydata: Entrydata = {
  date: "2024-03-18",
  tag: ["js"],
};

export default function Page() {

  return (
    <p>test2</p>
  );
}