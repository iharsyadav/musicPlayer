import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import TestPage from "../pages/Test";
import SongUploadForm from "../components/Song/SongUploadForm";

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
      {
        path: "/upload",
        element: <SongUploadForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

]);

export default router;
