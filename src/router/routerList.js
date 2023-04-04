import App from "../App";
import Home from "../pages/index";
import About from "../pages/about";
import { MiscroSolt } from "../config/miscroSolt";
import { createBrowserRouter } from "react-router-dom";
//创建路由表
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        children: [{}],
      },
      { path: "/app-test", element: <MiscroSolt /> },
      { path: "/app-test2", element: <MiscroSolt /> },
    ],
  },

  {
    path: "/user",
    // element:<User/>
    children: [],
  },
];
const router = createBrowserRouter(routes);
export default router;
