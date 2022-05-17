import { registerHtml } from "tram-one";
import logo from "@tram-one/tram-logo/dist/element";
import "./app.css";

const html = registerHtml();

export default () => {
  return html`
    <main class="app">
      ${logo}
      <p>Update '<code>src/app.js</code>' to see changes!</p>
      <a href="https://tram-one.io" target="_blank"> Learn Tram-One </a>
    </main>
  `;
};
