import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import AppLayout from "./layouts/AppLayout";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { path: "/", Component: Homepage },
      { path: "*", Component: Error },
    ],
  },
]);
