import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Article } from "../dummy";

export const HomePage = () => {
  const { push } = useHistory();
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then(({ data }) => setArticles(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="p-4">
        <button
          className="bg-indigo-600 text-white rounded-md px-4 py-2"
          onClick={() => push("articles/write")}
        >
          글 작성
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 gap-y-5 gap-x-2 m-2">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
