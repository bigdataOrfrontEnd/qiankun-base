import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";

import { registerMicroApps, start } from "qiankun"; // 倒入乾坤框架的两个api
import { menu } from "./menu"; //这个menu是自己生命的一个数组，格式类型[{}]
import { Divider } from "antd-mobile";
registerMicroApps(menu); // 注册子应用
start(); //启动微应用的api
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
