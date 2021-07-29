import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Article } from "../dummy";

export const ArticlePage = () => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${id}`)
      .then(({ data }) => setArticle(data));
  });
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
