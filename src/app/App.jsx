import React, { Fragment, lazy, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import { rootRoutes } from "./Routes";

const TopbarFooterLayout = () => {
  return (
    <Fragment>
      <Topbar />
      {renderRoutes(rootRoutes)}
      <Footer />
    </Fragment>
  );
};

const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route
            path="/page"
            exact
            component={lazy(() => import("./views/Page"))}
          />
          <Route
            path="/exp3-content"
            exact
            component={lazy(() => import("./views/Exp3Content"))}
          />
          <Route
            path="/payment-success"
            exact
            component={lazy(() => import("./views/PaymentSuccess"))}
          />
          <Route
            path="/test"
            exact
            component={lazy(() => import("./views/Page2"))}
          />
          <Route path="/" component={TopbarFooterLayout} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
