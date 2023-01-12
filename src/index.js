import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";

// Importing Provider
import { Provider } from "react-redux";
// Importing Store
import { store } from "./App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
