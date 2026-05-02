import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/login",
    Component: Login,
  },
]);
