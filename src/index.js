import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
const styleObj = {
  color: "#ffffff",
  backgroundColor: "#2bbba9",
  textAlign: "center",
  borderRadius: "40px"
};
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h1 style={styleObj}>EMOOJI PEDIA from scrach by Reda </h1>
    <App />
  </StrictMode>,
  rootElement
);
