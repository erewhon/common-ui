import { PropsWithChildren } from "react";
import { formatDate } from "../lib/formatting-utils";
import { Disclosure } from "./disclosure";
import { Prose } from "./prose";
import type { Article } from "./types";

export function ArticlePage({
  children,
  ...article
}: PropsWithChildren<Article>) {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <div className="mx-auto max-w-2xl">
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="flex items-center text-base text-zinc-400 dark:text-zinc-500 mt-1"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <span className="ml-3">{formatDate(article.date)}</span>
            </time>
            <Disclosure post={article} />
          </header>
          <Prose className="mt-8">{children}</Prose>
        </article>
      </div>
    </div>
  );
}
