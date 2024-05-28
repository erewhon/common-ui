import glob from "fast-glob";
import * as fs from "node:fs";
import { Article } from "../components/types";

const RootDir = "./src/app/articles";

async function importArticle(filename: string): Promise<Article> {
  const metadata = JSON.parse(
    fs.readFileSync(`${RootDir}/${filename}`, "utf8"),
  );

  return {
    slug: filename.replace(/\/content\.json$/, ""),
    ...metadata,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob("**/content.json", {
    cwd: RootDir,
  });

  // console.log(articleFilenames);

  const articles = await Promise.all(articleFilenames.map(importArticle));

  // console.log(articles.sort((a, z) => +new Date(z.date) - +new Date(a.date)));

  // console.log(articles.toSorted((a, b) =>
  // ));

  return articles
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
    .filter((article) => !article.draft);
}
