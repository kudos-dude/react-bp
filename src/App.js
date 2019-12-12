import React from "react";

import { Switch, Route, withRouter } from "react-router-dom";

import Blank from "scenes/Blank";

const App = () => (
  <Switch>
    <Route exact path="/" component={Blank} />
  </Switch>
);

export default withRouter(App);
