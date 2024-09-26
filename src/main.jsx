import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import { customTheme } from "./theme"; // Import your custom theme
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
