import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { articles } from "../dummy";

export const ArticleWritePage = () => {
  const { goBack } = useHistory();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <>
      <div className="max-w-lg mx-auto pt-12 flex flex-col space-y-4">
        <h1>새로 작성</h1>
        <input
          className="border rounded-md border-gray-200 p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border rounded-md border-gray-200 p-2"
          placeholder="내용"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button
          className="bg-indigo-600 border rounded-md text-white px-2 py-3"
          onClick={() => {
            const id = articles.length + 2;
            articles.push({
              id,
              title,
              contents,
              thumbnail: `https://source.unsplash.com/random/400x400?sig=${id}`,
            });
            goBack();
          }}
        >
          작성
        </button>
      </div>
    </>
  );
};
