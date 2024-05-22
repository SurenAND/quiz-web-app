import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FormProvider } from "./context/FormContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
);
