import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContexProvider from "./components/context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContexProvider>
        <App />
      </AppContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
