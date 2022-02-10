import React from "react";
import ReactDOM from "react-dom";

import  Label  from "remoteReact/Label";
import "./index.css";
const App = () => (
  <div className="bc-container bc-bg-primary bc-text-secondary">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Label name="Juanita" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
