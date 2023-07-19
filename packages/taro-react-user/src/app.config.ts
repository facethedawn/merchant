export default defineAppConfig({
  pages: [
    'pages/goods-list/index',
    'pages/brokerage-list/index',
    'pages/order-list/index',
    'pages/mine/index',
    'pages/person-info/index',
    'account/change-pwd/index',
    'pages/live-list/index',
    'pages/fill-in-express/index',
    'pages/order-detail/index',
    'pages/return-order-list/index',
    'pages/index/index',
    'pages/detail/index',
    'pages/subpage/index',
    'account/apply/index',
    'account/auth/index',
    'account/mobileLogin/index',
    'account/register/index',
    'account/review-progress/index',
    'account/accountLogin/index',
    'account/agreement/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/goods-list/index",
        text: "",
        iconPath: "img/tab-icon1-1.png",
        selectedIconPath: "img/tab-icon1-2.png"
      },
      {
        pagePath: "pages/order-list/index",
        text: "",
        iconPath: "img/tab-icon2-1.png",
        selectedIconPath: "img/tab-icon2-2.png"
      },
      {
        pagePath: "pages/return-order-list/index",
        text: "",
        iconPath: "img/tab-icon3-1.png",
        selectedIconPath: "img/tab-icon3-2.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "",
        iconPath: "img/tab-icon4-1.png",
        selectedIconPath: "img/tab-icon4-2.png"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
