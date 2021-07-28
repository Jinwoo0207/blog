import React from "react";
import { articles } from "../dummy";
import { Card } from "../components";

export const HomePage = () => {
  return (
    <>
      <h1>블로그</h1>
      <p>제 블로그입니다.</p>

      <div>
        {articles.map((article) => (
          <Card key={article.id} title={article.title} />
        ))}
      </div>
    </>
  );
};
