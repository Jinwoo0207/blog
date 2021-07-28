import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../dummy";

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.id === Number(id));
  console.log(article);

  if (!article) return <>404 NOT FOUND</>;

  return (
    <>
      <img src={article.thumbnail} alt="thumb" />
      <p>{article.title}</p>
      <p>{article.contents}</p>
    </>
  );
};
