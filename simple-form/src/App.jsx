import React from "react";
import MyForm from "./MyForm.jsx";
import { Route, Switch } from "react-router-dom";

const App = () => {
  <Switch>
    <Route path="/" component={MyForm} />
  </Switch>;
};
export default App;
