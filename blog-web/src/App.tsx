import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, ArticlePage } from "./pages";
import { ArticleWritePage } from "./pages/ArticleWritePage";
import { recentState } from "./plugins/ridge";

function App() {
  const recent = recentState.useValue();
  return (
    <>
      {/* Header */}
      <div className="sticky top-0 p-2 bg-white shadow-lg w-full h-14">
        <div className="w-full max-w-screen-xl mx-auto flex items-end">
          <h1 className="font-extrabold text-4xl text-blue-700">블로그</h1>
          <p className="pl-3 text-xl text-gray-500">블로그입니다.</p>
          <div>
            <p>최근 방문한 페이지 : {recent?.title}</p>
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Switch>
          <Route path="/articles/write" component={ArticleWritePage} />
          <Route path="/articles/:id" component={ArticlePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
