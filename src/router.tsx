import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import AppLayout from "./layouts/AppLayout";
import Projects from "./pages/Projects";
import Apps from "./pages/Apps";
import Loading from "./components/Loading/Loading";
import { moviePageLoader } from "./lib/movie";
import Movies from "./pages/Movies/Movies";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { path: "/", Component: Homepage },
      { path: "/projects", Component: Projects },
      { path: "/apps", Component: Apps },
      { path: "*", Component: Error },

      // Apps
      {
        path: "movies",
        Component: Movies,
        loader: moviePageLoader,
        HydrateFallback: Loading,
      },
    ],
  },
]);
