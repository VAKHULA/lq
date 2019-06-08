import React from "react";
import ReactDOM from "react-dom";

import Admin from "./Admin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Admin />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
