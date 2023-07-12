export default defineAppConfig({
  pages: [
    'account/auth/index',
    'account/apply/index',
    'pages/goods-list/index',
    'account/reg/index',
    'account/review-progress/index',
    'account/login/index',
    'account/agreement/index',
    'pages/index/index',
    'pages/mine/index',
    'pages/detail/index',
    'pages/subpage/index',
  ],
  tabBar: {
    list: [{
      pagePath: "pages/goods-list/index",
      text: "商品"
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
