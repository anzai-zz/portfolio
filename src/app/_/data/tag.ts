const tagList = {
  js: "JavaScript",
  ts: "TypeScript",
  news: "News",
} as const;

export default tagList;

export type TagSlug = keyof typeof tagList;
