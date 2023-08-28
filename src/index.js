import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import { App } from "./App";
import { Components } from "./components/Components";

import { RouteComponent } from "./routes/RoutesComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App Components={Components} RouteComponent={RouteComponent} />
        </BrowserRouter>
    </React.StrictMode>
);
