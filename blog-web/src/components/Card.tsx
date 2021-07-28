import React from "react";
import { useHistory } from "react-router-dom";
import { Article } from "../dummy";

interface CardProps {
  article: Article;
}

export const Card = ({ article }: CardProps) => {
  const { push } = useHistory();

  return (
    <button
      className="text-left"
      onClick={() => push(`/articles/${article.id}`)}
    >
      <img src={article.thumbnail} alt="thumb" />
      <p className="text-xl font-semibold">{article.title}</p>
      <p className="text-sm truncate text-gray-600">{article.contents}</p>
    </button>
  );
};
