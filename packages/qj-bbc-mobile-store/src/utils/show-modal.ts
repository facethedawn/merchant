import { getTaro } from '@brushes/utils';
const Taro = getTaro();

export const showModal = (title: string = '', content: any) => {
  Taro.showModal({
    title,
    content,
    success: function (res: any) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}
