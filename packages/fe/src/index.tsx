import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RelayEnvironmentProvider } from "relay-hooks";

import "./index.css";
import App from "./App";
import { makeRelayEnvironment } from "./environment";

// import reportWebVitals from './reportWebVitals';

const { environment } = makeRelayEnvironment();
// @ts-expect-error
window.environment = environment;

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
