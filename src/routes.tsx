import { RouteObject } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";

const routes: RouteObject[] = [
  {
    path: "/about",
    element: <AboutPage />,
    children: [
      {
        path: "news",
        element: <NewsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
];
export default routes;
