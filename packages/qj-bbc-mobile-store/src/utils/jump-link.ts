import { getTaro } from '@brushes/utils';
export const jumpLink = (url: string) => {
  const Taro = getTaro();
  Taro.navigateTo({
    url,
  })
}

export const jumpTabBar = (url: string) => {
  const Taro = getTaro();
  Taro.switchTab({
    url
  })
}
