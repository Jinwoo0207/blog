import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, ArticlePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
