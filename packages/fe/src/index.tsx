import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RelayEnvironmentProvider } from "relay-hooks";

import "./index.css";
import App from "./App";
import { makeRelayEnvironment } from "./environment";

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
