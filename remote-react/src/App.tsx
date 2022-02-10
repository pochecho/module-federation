import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Label from "./Label";

const App = () => (
  <div className="container">
    <div>Name: remote-react</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Label name="Sergio"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
