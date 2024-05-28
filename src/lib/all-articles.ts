import glob from "fast-glob";
import * as fs from "node:fs";
import { Article } from "../components/types";

async function importArticle(
  contentType: string,
  filename: string,
): Promise<Article> {
  const metadata = JSON.parse(
    fs.readFileSync(`./src/app/${contentType}/${filename}`, "utf8"),
  );

  return {
    slug: filename.replace(/\/content\.json$/, ""),
    ...metadata,
  };
}

export async function getAllArticles(contentType: string): Promise<Article[]> {
  let articleFilenames = await glob("**/content.json", {
    cwd: `./src/app/${contentType}`,
  });

  // console.log(articleFilenames);

  const articles = await Promise.all(
    articleFilenames.map((filename) => importArticle(contentType, filename)),
  );

  // console.log(articles.sort((a, z) => +new Date(z.date) - +new Date(a.date)));

  // console.log(articles.toSorted((a, b) =>
  // ));

  return articles
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
    .filter((article) => !article.draft);
}
