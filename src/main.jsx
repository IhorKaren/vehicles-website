// import React from 'react';
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";

// import '@fontsource/inter';
// import '@fontsource/montserrat';
import Providers from "@/components/Providers";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Providers>
    <App />
    <CssBaseline />
  </Providers>,
  // </React.StrictMode>
);
