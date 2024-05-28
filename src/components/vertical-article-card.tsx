import { Article } from "./types";
import { formatDate } from "../lib/formatting-utils";

type Props = {
  postType: string;
  article: Article;
};

export function VerticalArticleCard({ postType, article }: Props) {
  return (
    <a href={`/${postType}/${article.slug}`}>
      <div
        className={
          "h-96 w-64 p-5 border border-gray-700 rounded hover:shadow hover:scale-110 transition-all bg-black hover:bg-gray-600 flex flex-col items-center"
        }
      >
        <div>
          <img
            src={article.cardImage}
            className={"w-48 h-48 rounded-xl object-cover"}
          />
        </div>
        <div className={"mt-2 w-56 truncate mx-auto"}>{article.title}</div>
        <div className={"text-xs text-slate-600"}>
          {formatDate(article.date)}
        </div>
        <div className={"text-sm w-56 mt-2 line-clamp-3"}>
          {article.description}
        </div>
      </div>
    </a>
  );
}
