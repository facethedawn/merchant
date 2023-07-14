import Taro from "@tarojs/taro";

export const safeArea = () => {
  if (
    Taro.getStorageSync('safeArea') &&
    Taro.getStorageSync('tabBarHeight') &&
    Taro.getStorageSync('statusBarHeight') &&
    Taro.getStorageSync('systemTopButton')
  ) return;
  try {
    const systemInfo = Taro.getSystemInfoSync();
    const systemTopButton = Taro.getMenuButtonBoundingClientRect();
    const screenHeight = systemInfo.screenHeight;
    const safeHeight = systemInfo.safeArea?.bottom || systemInfo.screenHeight;
    const screenWidth = systemInfo.screenWidth;
    const statusBarHeight = systemInfo.statusBarHeight;
    Taro.setStorageSync('safeArea', screenHeight - safeHeight);
    Taro.setStorageSync('tabBarHeight', Math.floor(50 * screenWidth / 375));
    Taro.setStorageSync('statusBarHeight', statusBarHeight)
    Taro.setStorageSync('systemTopButton', systemTopButton);
  } catch (e) {
    console.log(e)
  }
}
