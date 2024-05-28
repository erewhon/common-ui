import glob from "fast-glob";
import * as fs from "node:fs";
import { Article } from "../components/types";

async function importArticle(
  rootDir: string,
  filename: string,
): Promise<Article> {
  const metadata = JSON.parse(
    fs.readFileSync(`${rootDir}/${filename}`, "utf8"),
  );

  return {
    slug: filename.replace(/\/content\.json$/, ""),
    ...metadata,
  };
}

export async function getAllArticles(rootDir: string): Promise<Article[]> {
  let articleFilenames = await glob("**/content.json", {
    cwd: rootDir,
  });

  // console.log(articleFilenames);

  const articles = await Promise.all(
    articleFilenames.map((filename) => importArticle(rootDir, filename)),
  );

  // console.log(articles.sort((a, z) => +new Date(z.date) - +new Date(a.date)));

  // console.log(articles.toSorted((a, b) =>
  // ));

  return articles
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
    .filter((article) => !article.draft);
}
