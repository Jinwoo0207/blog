import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { articles } from "../dummy";

export const ArticlePage = () => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.id === Number(id));
  console.log(article);

  if (!article) return <>404 NOT FOUND</>;

  return (
    <>
      <button onClick={goBack}>뒤로가기</button>
      <img src={article.thumbnail} alt="thumb" />
      <p>{article.title}</p>
      <p>{article.contents}</p>
    </>
  );
};
