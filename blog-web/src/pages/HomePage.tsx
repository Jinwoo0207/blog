import React from "react";
import { articles } from "../dummy";
import { Card } from "../components";

export const HomePage = () => {
  return (
    <>
      <div className="sticky top-0 flex p-2 bg-white shadow-lg w-full h-14">
        <div className="flex items-end">
          <h1 className="font-extrabold text-4xl text-blue-700">블로그</h1>
          <p className="pl-3 text-xl text-gray-500">블로그입니다.</p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-2 gap-y-5 gap-x-2 m-2">
          {articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};
