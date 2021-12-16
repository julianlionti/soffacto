import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { initTranslations } from "./translations";

console.log(
  "%c" + "Welcome to Soffacto",
  "font-family:Comic Sans MS; font-size:50px; font-weight:bold; color:blue"
);

initTranslations();
const app = document.getElementById("app");
ReactDOM.render(<App />, app);

reportWebVitals(console.log);
