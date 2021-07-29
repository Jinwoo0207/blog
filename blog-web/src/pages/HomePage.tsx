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
    <>
      {/* Header */}
      <div className="sticky top-0 p-2 bg-white shadow-lg w-full h-14">
        <div className="w-full max-w-screen-xl mx-auto flex items-end">
          <h1 className="font-extrabold text-4xl text-blue-700">블로그</h1>
          <p className="pl-3 text-xl text-gray-500">블로그입니다.</p>
        </div>
      </div>

      {/* Body */}
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
    </>
  );
};
