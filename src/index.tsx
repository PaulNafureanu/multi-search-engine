import { createRoot } from "react-dom/client";
import App from "./App";
import "./../global.css";
import DarkModeProvider from "./contexts/DarkModeProvider";

const DOMRoot = document.createElement("div");
DOMRoot.id = "root";
document.body.appendChild(DOMRoot);
const root = createRoot(DOMRoot);

root.render(
  <DarkModeProvider value={false}>
    <App />
  </DarkModeProvider>
);
