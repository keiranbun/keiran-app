import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import AppLayout from "./layouts/AppLayout";
import Projects from "./pages/Projects";
import Apps from "./pages/Apps";
import MovieList from "./pages/MovieList";
import { movieLoader } from "./lib/movie";
import Loading from "./components/Loading/Loading";

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
        Component: MovieList,
        loader: movieLoader,
        HydrateFallback: Loading,
      },
    ],
  },
]);
