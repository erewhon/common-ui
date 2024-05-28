import { Article } from "../components/types";

export function buildMetadata(article: Article) {
  return {
    title: article.title,
    description: article.description,
    other: { date: article.date, cardImage: article.cardImage || "" },
    // alternates: { canonical: "/privacy" },
  };
}
