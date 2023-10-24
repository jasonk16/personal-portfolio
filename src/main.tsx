import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import awsconfig from "./aws-exports.js";
import studioTheme from "./ui-components/studioTheme";
import App from "./App.tsx";
import "./index.css";

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
