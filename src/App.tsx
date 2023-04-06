import { Routes, Route, Link } from "react-router-dom";
import { MiscroSolt } from "./config/miscroSolt";
function App() {
  return (
    <div>
      <h1>注册子应用</h1>
      <Link to="/app-test">app-test子应用</Link>
      <br />
      <Link to="/app-test2/">app-test2子应用</Link>
      <Routes>
        <Route path="/app-test/*" element={<MiscroSolt />}></Route>
        <Route path="/app-test2/*" element={<MiscroSolt />}></Route>
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
