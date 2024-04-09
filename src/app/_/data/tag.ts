const tagList = {
  js: "JavaScript",
  ts: "TypeScript",
  react: "React",
  news: "News",
} as const;

export default tagList;

export type TagSlug = keyof typeof tagList;
