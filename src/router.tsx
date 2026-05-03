import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/*",
    Component: Error,
  },
]);
