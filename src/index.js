import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";

const user = {
  roles: ["none"] /*roles: kursleiter, admin, none*/
};

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
