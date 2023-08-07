import { RouteObject } from "react-router-dom";
import { MiscroSolt } from "../config/miscroSolt";
import Home from "../pages/home";
import EchartOne from "../pages/echars";

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
    path: "/app-test3/*",
    element: <MiscroSolt />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/echart",
    element: <EchartOne />,
  },
];

export default router;
