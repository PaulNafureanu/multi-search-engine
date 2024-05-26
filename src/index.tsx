import { createRoot } from "react-dom/client";
import App from "./App";
import "./../global.css";

const DOMRoot = document.createElement("div");
document.body.appendChild(DOMRoot);
const root = createRoot(DOMRoot);
root.render(<App />);
