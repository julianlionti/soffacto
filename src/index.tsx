import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { initTranslations } from "./translations";

initTranslations();

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

reportWebVitals(console.log);
