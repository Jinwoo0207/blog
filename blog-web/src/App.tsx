import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, ArticlePage } from "./pages";
import { ArticleWritePage } from "./pages/ArticleWritePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/articles/write" component={ArticleWritePage} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
