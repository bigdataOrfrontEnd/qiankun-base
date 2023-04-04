import About from "../pages/index";
import { MiscroSolt } from "../config/miscroSolt";
const routres = [
  { path: "/about", element: <About /> },
  { path: "/app-test", element: <MiscroSolt /> },
  { path: "/app-test2", element: <MiscroSolt /> },
];
export default routres;
