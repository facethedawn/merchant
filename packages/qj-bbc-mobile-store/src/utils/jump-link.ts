import { getTaro } from '@brushes/utils';
const Taro = getTaro();

export const jumpLink = (url) => {
  Taro.navigateTo({
    url,
  })
}
