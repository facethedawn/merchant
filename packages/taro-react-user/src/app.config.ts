export default defineAppConfig({
  pages: [
    'pages/fill-in-express/index',
    'pages/order-list/index',
    'pages/goods-list/index',
    'pages/order-detail/index',
    'pages/return-order/index',
    'pages/mine/index',
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
        pagePath: "pages/return-order/index",
        text: "",
        iconPath: "img/tab-icon3-1.png",
        selectedIconPath: "img/tab-icon3-2.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "",
        iconPath: "img/tab-icon3-1.png",
        selectedIconPath: "img/tab-icon3-2.png"
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
