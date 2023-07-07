"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-6FUDFIS6_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-JBC2HC5Z_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-LNJCN3VW_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-html_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brushes/request */ "./node_modules/@brushes/request/dist/index.js");
/* harmony import */ var _brushes_taro_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brushes/taro-hooks */ "./node_modules/@brushes/taro-hooks/dist/index.js");
/* harmony import */ var _routerMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/routerMap */ "./src/routerMap/index.ts");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* provided dependency */ var location = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["location"];













var App = /*#__PURE__*/function (_Component) {
  (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(App, _Component);
  var _super = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(App);
  function App() {
    (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, App);
    return _super.apply(this, arguments);
  }
  (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync('routerMap');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync('menuOpcode');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().removeStorageSync('taroMenu');
      console.log(85, '================ componentDidShow ==============');
      /**
       * 初始化应用
       */

      //@ts-ignore
      (0,_brushes_taro_hooks__WEBPACK_IMPORTED_MODULE_4__.initApplication)({
        tabBar: _routerMap__WEBPACK_IMPORTED_MODULE_5__.tabBarList,
        subpackage: _routerMap__WEBPACK_IMPORTED_MODULE_5__.appendPath,
        menuTreeIo: qj_b2c_api__WEBPACK_IMPORTED_MODULE_6__.queryNewTginfoMenuTree,
        pageInfoIo: qj_b2c_api__WEBPACK_IMPORTED_MODULE_6__.getPfsModelTagValueByTginfo
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_7__.safeArea)();
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getEnv() === 'WEB') {
        _brushes_request__WEBPACK_IMPORTED_MODULE_3__.fly.engine = XMLHttpRequest;
      }
      if (true) {
        return;
      }

      //
      _brushes_request__WEBPACK_IMPORTED_MODULE_3__.fly.interceptors.request.use(function (config) {
        //给所有请求添加自定义header
        config.headers = {
          'saas-token': (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_1__.getStorage)('saas-token')
        };
        if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getEnv() === 'WEB') {
          config.baseURL = location.origin + '/';
        }
        return config;
      });
      // /**
      //  * 初次加载判断网络情况
      //  * 无网络状态下根据实际情况进行调整
      //  */
      // wx.getNetworkType({
      //   success(res) {
      //     const networkType = res.networkType
      //     if (networkType === 'none') {
      //       // that.globalData.isConnected = false
      //       wx.showToast({
      //         title: '当前无网络',
      //         icon: 'loading',
      //         duration: 2000
      //       })
      //     }
      //   }
      // });
      // /**
      //  * 监听网络状态变化
      //  * 可根据业务需求进行调整
      //  */
      // wx.onNetworkStatusChange(function(res) {
      //   if (!res.isConnected) {
      //     // that.globalData.isConnected = false
      //     wx.showToast({
      //       title: '网络已断开',
      //       icon: 'loading',
      //       duration: 2000
      //     })
      //   } else {
      //     // that.globalData.isConnected = true
      //     wx.hideToast()
      //   }
      // })
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      // this.props.children 是将要会渲染的页面
      return this.props.children;
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "webpack/container/remote/@tarojs/plugin-html/dist/runtime");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.ts */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);












var config = {"pages":["pages/index/index","pages/shopping/index","pages/classify/index","pages/my/index","pages/dynamicTab/index","account/register/index","account/accountLogin/index","account/mobileLogin/index","account/forgetPwd/index","account/agreement/index","account/auth/index","account/confirmPhone/index","account/bindPhone/index","account/mySetting/index","account/setting/index","account/myAgreementList/index","package/one/index","package/two/index","package/three/index","package/four/index","package/five/index","package/six/index","package/seven/index","package/eight/index","package/nine/index","package/ten/index","package/eleven/index","package/twelve/index","package/thirteen/index","package/fourteen/index","package/fifteen/index","package/sixteen/index","package/seventeen/index","package/eighteen/index","package/nineteen/index","package/twenty/index","package/twenty-one/index","package/twenty-two/index","package/twenty-three/index","package/twenty-four/index","package/twenty-five/index","package/twenty-six/index","package/twenty-seven/index","package/twenty-eight/index","package/twenty-nine/index","package/thirty/index","package/thirty-one/index","package/thirty-two/index","package/thirty-three/index","package/thirty-four/index","package/thirty-five/index","package/thirty-six/index","package/thirty-seven/index","package/thirty-eight/index","package/thirty-nine/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"custom":true,"color":"#444","selectedColor":"#DC143C","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页"},{"pagePath":"pages/classify/index","text":"分类"},{"pagePath":"pages/shopping/index","text":"购物车"},{"pagePath":"pages/my/index","text":"我的"},{"pagePath":"pages/dynamicTab/index","text":"自定义页面"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createReactApp)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__["default"], react__WEBPACK_IMPORTED_MODULE_6__, (react_dom__WEBPACK_IMPORTED_MODULE_7___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: 375,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/routerMap/index.ts":
/*!********************************!*\
  !*** ./src/routerMap/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendPath": function() { return /* reexport safe */ _append__WEBPACK_IMPORTED_MODULE_1__.appendPath; },
/* harmony export */   "tabBarList": function() { return /* reexport safe */ _basic__WEBPACK_IMPORTED_MODULE_0__.tabBarList; }
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ "./src/routerMap/basic.ts");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ "./src/routerMap/append.ts");




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map