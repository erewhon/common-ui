import React from "react";
import { Article } from "./types";
import { Card } from "./card";
import { formatDate } from "../lib/formatting-utils";

type Props = {
  postType: string;
  article: Article;
};

export function ArticleCard({ postType, article }: Props) {
  return (
    <article className="relative md:grid md:grid-cols-5 md:items-start">
      <Card className={"md:col-span-4 md:space-x-5"}>
        <Card.Image>
          {article.cardImage && (
            <img
              src={article.cardImage}
              alt={"Card image"}
              className={"aspect-auto w-20 rounded-lg"}
            />
          )}
        </Card.Image>
        <Card.Content>
          <Card.Title href={`/${postType}/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card.Content>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden items-start md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}
