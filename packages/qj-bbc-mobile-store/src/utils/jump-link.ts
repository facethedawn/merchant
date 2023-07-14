import { getTaro } from '@brushes/utils';
const Taro = getTaro();

export const jumpLink = (url: string) => {
  Taro.navigateTo({
    url,
  })
}

export const jumpTabBar = (url: string) => {
  Taro.switchTab({
    url
  })
}
