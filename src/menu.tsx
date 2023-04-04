export const menu = [
  {
    name: "app-test2", //与子应用的配置library一致
    entry: "//localhost:20001", //微应用入口
    container: "#microSlot1", //微应用容器
    activeRule: "/app-test2",
  },
  {
    name: "app-test",
    entry: "//localhost:20000",
    container: "#microSlot",
    activeRule: "/#/app-test",
  },
];
