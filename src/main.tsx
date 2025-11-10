import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
