import {
  Outlet,
  Link,
  NavLink,
  useRoutes,
  useNavigate,
} from "react-router-dom";
import { Button } from "antd-mobile";
import router from "./router";
function App() {
  const element = useRoutes(router);
  const nagivate = useNavigate();
  const go = () => {
    nagivate("/app-test/my");
  };
  return (
    <div>
      {/* {element} */}
      <h1>这是App主页面</h1>
      <NavLink to="/home">
        <Button> 去主页</Button>
      </NavLink>
      <Link to="/about">
        <Button> 去ablot</Button>
      </Link>
      <br />
      <Link to="/app-test">pc端</Link>
      <br />
      <Link to="/app-test2">第二个案例</Link>
      <Outlet />
      <Button onClick={go}>qqqq</Button>
    </div>
  );
}

export default App;
