import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//allows us to route
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  //intializes the browser router, wrapping the router around the entire app
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
