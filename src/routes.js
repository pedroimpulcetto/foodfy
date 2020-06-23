import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/recipes" exact component={Recipes} />
  </Switch>
);

export default Routes;
