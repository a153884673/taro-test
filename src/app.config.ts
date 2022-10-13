export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/search/index",
    "pages/musicLibrary/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Quatify",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    backgroundColor: "#000",
    borderStyle: "black",
    color: "#f0f",
    selectedColor: "#ff0",
    list: [
      { pagePath: "pages/index/index", text: "主页" },
      { pagePath: "pages/search/index", text: "搜索" },
      { pagePath: "pages/musicLibrary/index", text: "音乐库" }
    ]
  }
});
