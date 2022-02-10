import "./index.css";

import Button from "./Button";
document.getElementById("app").innerHTML = `
<div class="container">
  <div>Name: remote</div>
  <div>Framework: vanilla</div>
  <div>Language: TypeScript</div>
  <div>CSS: Empty CSS</div>
  ${Button({ text: 'Skip me' })}
</div>
`;
