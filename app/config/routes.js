import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import QuoteForm from "../components/QuoteForm";
import MainRoute from "../components/MainRoute";
import Favorites from "../components/Favorites";
// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainRoute}>
    	<Route path="favorites" component={Favorites} />
    	<IndexRoute component={Main}/>
    </Route>
  </Router>
);

export default routes;
