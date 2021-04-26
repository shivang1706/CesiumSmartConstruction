import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Dashboard } from "./components/Dashboard";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
  rootElement
);
