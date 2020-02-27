import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { reducer } from "./redux/store";
import { Router } from "@reach/router";
import "./index.css";
import Home from "./Home";
import App from "./App";
import SearchApp from "./SearchApp";

const composeEnhaced = compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, composeEnhaced);

render(
  <Provider store={store}>
    <Router>
      <Home path="/" />
      <App path="/todo" />
      <SearchApp path="/search" />
    </Router>
  </Provider>,
  document.getElementById("root")
);
