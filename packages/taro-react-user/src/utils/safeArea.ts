import Taro from "@tarojs/taro";

export const safeArea = () => {
  if (Taro.getStorageSync('safeArea') && Taro.getStorageSync('tabBarHeight')) return;
  try {
    const systemInfo = Taro.getSystemInfoSync();
    const screenHeight = systemInfo.screenHeight;
    const safeHeight = systemInfo.safeArea?.bottom || systemInfo.screenHeight;
    const screenWidth = systemInfo.screenWidth;
    Taro.setStorageSync('safeArea', screenHeight - safeHeight);
    Taro.setStorageSync('tabBarHeight', Math.floor(50 * screenWidth / 375))
    console.log('haha')
  } catch (e) {
    console.log(e)
  }
}
