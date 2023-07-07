export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/detail/index',
  ],
  tabBar: {
    list: [{
      pagePath: "pages/index/index",
      text: "首页"
    }, {
      pagePath: "pages/mine/index",
      text: "我的"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
