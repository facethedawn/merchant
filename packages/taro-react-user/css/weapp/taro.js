"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ad": function() { return /* binding */ Ad; },
/* harmony export */   "AdCustom": function() { return /* binding */ AdCustom; },
/* harmony export */   "Audio": function() { return /* binding */ Audio; },
/* harmony export */   "Block": function() { return /* binding */ Block; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; },
/* harmony export */   "Canvas": function() { return /* binding */ Canvas; },
/* harmony export */   "ChannelLive": function() { return /* binding */ ChannelLive; },
/* harmony export */   "ChannelVideo": function() { return /* binding */ ChannelVideo; },
/* harmony export */   "Checkbox": function() { return /* binding */ Checkbox; },
/* harmony export */   "CheckboxGroup": function() { return /* binding */ CheckboxGroup; },
/* harmony export */   "CoverImage": function() { return /* binding */ CoverImage; },
/* harmony export */   "CoverView": function() { return /* binding */ CoverView; },
/* harmony export */   "CustomWrapper": function() { return /* binding */ CustomWrapper; },
/* harmony export */   "Editor": function() { return /* binding */ Editor; },
/* harmony export */   "Form": function() { return /* binding */ Form; },
/* harmony export */   "FunctionalPageNavigator": function() { return /* binding */ FunctionalPageNavigator; },
/* harmony export */   "Icon": function() { return /* binding */ Icon; },
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "Input": function() { return /* binding */ Input; },
/* harmony export */   "KeyboardAccessory": function() { return /* binding */ KeyboardAccessory; },
/* harmony export */   "Label": function() { return /* binding */ Label; },
/* harmony export */   "LivePlayer": function() { return /* binding */ LivePlayer; },
/* harmony export */   "LivePusher": function() { return /* binding */ LivePusher; },
/* harmony export */   "Map": function() { return /* binding */ Map; },
/* harmony export */   "MatchMedia": function() { return /* binding */ MatchMedia; },
/* harmony export */   "MovableArea": function() { return /* binding */ MovableArea; },
/* harmony export */   "MovableView": function() { return /* binding */ MovableView; },
/* harmony export */   "NativeSlot": function() { return /* binding */ NativeSlot; },
/* harmony export */   "NavigationBar": function() { return /* binding */ NavigationBar; },
/* harmony export */   "Navigator": function() { return /* binding */ Navigator; },
/* harmony export */   "OfficialAccount": function() { return /* binding */ OfficialAccount; },
/* harmony export */   "OpenData": function() { return /* binding */ OpenData; },
/* harmony export */   "PageContainer": function() { return /* binding */ PageContainer; },
/* harmony export */   "PageMeta": function() { return /* binding */ PageMeta; },
/* harmony export */   "Picker": function() { return /* binding */ Picker; },
/* harmony export */   "PickerView": function() { return /* binding */ PickerView; },
/* harmony export */   "PickerViewColumn": function() { return /* binding */ PickerViewColumn; },
/* harmony export */   "Progress": function() { return /* binding */ Progress; },
/* harmony export */   "Radio": function() { return /* binding */ Radio; },
/* harmony export */   "RadioGroup": function() { return /* binding */ RadioGroup; },
/* harmony export */   "RichText": function() { return /* binding */ RichText; },
/* harmony export */   "RootPortal": function() { return /* binding */ RootPortal; },
/* harmony export */   "ScrollView": function() { return /* binding */ ScrollView; },
/* harmony export */   "ShareElement": function() { return /* binding */ ShareElement; },
/* harmony export */   "Slider": function() { return /* binding */ Slider; },
/* harmony export */   "Slot": function() { return /* binding */ Slot; },
/* harmony export */   "Swiper": function() { return /* binding */ Swiper; },
/* harmony export */   "SwiperItem": function() { return /* binding */ SwiperItem; },
/* harmony export */   "Switch": function() { return /* binding */ Switch; },
/* harmony export */   "Text": function() { return /* binding */ Text; },
/* harmony export */   "Textarea": function() { return /* binding */ Textarea; },
/* harmony export */   "Video": function() { return /* binding */ Video; },
/* harmony export */   "View": function() { return /* binding */ View; },
/* harmony export */   "VoipRoom": function() { return /* binding */ VoipRoom; },
/* harmony export */   "WebView": function() { return /* binding */ WebView; }
/* harmony export */ });
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var NativeSlot = 'native-slot';
var CustomWrapper = 'custom-wrapper';

// For React.createElement's type
var Editor = 'editor';
var MatchMedia = 'match-media';
var FunctionalPageNavigator = 'functional-page-navigator';
var LivePusher = 'live-pusher';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var NavigationBar = 'navigation-bar';
var PageMeta = 'page-meta';
var VoipRoom = 'voip-room';
var AdCustom = 'ad-custom';
var PageContainer = 'page-container';
var ShareElement = 'share-element';
var KeyboardAccessory = 'keyboard-accessory';
var RootPortal = 'root-portal';
var ChannelLive = 'channel-live';
var ChannelVideo = 'channel-video';


/***/ }),

/***/ "./node_modules/@tarojs/webpack5-runner/dist/template/comp.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/dist/template/comp.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-undef */

// @ts-ignore
Component((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createRecursiveComponentConfig)());

/***/ }),

/***/ "./node_modules/@tarojs/webpack5-runner/dist/template/custom-wrapper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/dist/template/custom-wrapper.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
/* eslint-disable no-undef */
var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
// @ts-ignore
Component((0, runtime_1.createRecursiveComponentConfig)('custom-wrapper'));

/***/ })

}]);
//# sourceMappingURL=taro.js.map