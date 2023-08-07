import { Link, useRoutes } from "react-router-dom";
import { Foo } from "react-mylib";
// import "react-mylib/es/Foo/index.";
import router from "./router";
function App() {
  return (
    <div>
      <h1>注册子应用</h1>
      <Foo title="hello" />
      <Link to="/app-test">app-test子应用</Link>
      <br />
      <Link to="/app-test2/">app-test2子应用</Link>
      <Link to="/app-test3/">百度子应用</Link>
      <br />
      <Link to="/echart">移动端echart</Link>
      {/* <Routes>
        <Route path="/app-test/*" element={<MiscroSolt />}></Route>
        <Route path="/app-test2/*" element={<MiscroSolt />}></Route>
        <Route path="/app-test3/*" element={<MiscroSolt />}></Route>
        <Route path="/echart" element={<EchartOne />}></Route>
      </Routes> */}
      <div style={{ padding: "30px" }}>{useRoutes(router)}</div>
    </div>

    // </BrowserRouter>
  );
}

export default App;
