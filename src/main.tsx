import "@fontsource-variable/playfair-display";
import "@fontsource/poppins";

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

import awsconfig from "./aws-exports.js";
import studioTheme from "./ui-components/studioTheme";
import Home from "./pages/Home/index.tsx";
import App from "./App.tsx";

import "./index.css";

Amplify.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>TODO: Handle error routes here!</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
