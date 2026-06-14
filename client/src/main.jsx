import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./app/router";
import ThemeProvider from "./context/ThemeProvider";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ThemeProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
      }}
    />

    <RouterProvider router={router} />
  </ThemeProvider>
);