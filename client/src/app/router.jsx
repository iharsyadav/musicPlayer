import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import TestPage from "../pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

]);

export default router;
