import React from "react";
import { createRoot } from "react-dom/client";
import "./../global.css";
import App from "./App";
import ContextProviders from "./contexts/ContextProviders";

const DOMRoot = document.createElement("div");
DOMRoot.id = "root";
document.body.appendChild(DOMRoot);
const root = createRoot(DOMRoot);

root.render(
  <React.StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </React.StrictMode>
);
