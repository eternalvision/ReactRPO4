import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { App } from "./App";
import { Components } from "./components/Components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App Components={Components} />
    </React.StrictMode>
);
