import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import DetailsScreen from "./components/Details/index";
// import HomeScreen from "./screens/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact component={HomeScreen} path="/" /> */}
      <Route component={DetailsScreen} path="/:product" />
      <Redirect from="/" to="/productId" />
    </Switch>
  );
};

export default Routes;
