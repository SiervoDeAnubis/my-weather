import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { reducer } from "./redux/store";
import "./index.css";
import App from "./App";

const composeEnhaced = compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, composeEnhaced);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
