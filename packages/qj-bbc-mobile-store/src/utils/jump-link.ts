import { getTaro } from '@brushes/utils';
const Taro = getTaro();

export const jumpLink = () => {
  console.log(123)
  Taro.navigateTo({
    url: '/pages/detail/index',
  })
}
