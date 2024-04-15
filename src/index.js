import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { createRoot } from "react-dom/client";
import Router from "./routes";

createRoot(document.getElementById("root"), {}).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
