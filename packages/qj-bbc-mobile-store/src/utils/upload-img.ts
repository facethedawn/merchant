import { getTaro, getBaseUrl } from '@brushes/utils';
const Taro = getTaro();


const baseUrl = getBaseUrl();

export const uploadImg = (callback: any) => {
  Taro.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: function (res: any) {
      Taro.uploadFile({
        url: `${baseUrl}web/oc/refund/uploadRefFile.json`,
        filePath: res.tempFilePaths[0],
        name: 'file',
        header: {
          'saas-agent': 'qj-wemini',
          // 'saas-token': getStorage('saas-token')
        },
        success(res: any) {
          callback(res)
        }
      })
    }
  })
}
