import { NavBar } from "antd-mobile";
function App() {
  const back = () => {};

  return (
    <div>
      <NavBar onBack={back}>标题</NavBar>
    </div>
  );
}

export default App;
