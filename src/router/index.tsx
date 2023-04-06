import { RouteObject } from "react-router-dom";
import { MiscroSolt } from "../config/miscroSolt";
import Home from "../pages/home";

const router: RouteObject[] = [
  {
    path: "/app-test/*",
    element: <MiscroSolt />,
  },
  {
    path: "/app-test2/*",
    element: <MiscroSolt />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

export default router;
