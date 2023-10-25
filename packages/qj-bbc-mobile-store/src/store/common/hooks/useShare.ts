// @ts-nocheck
import {useEffect, useRef, useState} from "react";
import {getSetsupDisUtil, loginMiniCodeByTwoBus} from 'qj-bbc-api';
import {getTaro} from "@brushes/utils";
import {get} from 'lodash-es';
import {handlePath} from '../../../utils';


export const useShare = ({item}) => {
  const {skuNo, goodsType, memberCode, goodsName, dataPic, classtreeCode, brandCode} = item;
  const Taro = getTaro();
  const [shareShow, setShareShow] = useState(false);
  const saveImage = useRef('');

  useEffect(() => {
    init()
  }, [item]);

  // 把图片保存到系统中
  const savePictureSystem = () => {
    Taro.saveImageToPhotosAlbum({
      filePath: saveImage.current,
      success(res) {
        Taro.showToast({
          title: '保存成功!'
        })
      },
      fail() {
        Taro.showToast({
          title: '保存失败!',
          icon: 'close',
          duration: 2000
        })
      }
    })
  }


  // 保存到相册
  const save = () => {
    Taro.getSetting({
      success(res) {
        // 如果没有授权过，则要获取授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          Taro.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              savePictureSystem()
            },
            fail() { // 用户拒绝
              Taro.showModal({
                title: '授权',
                content: '您拒绝了授权请求，是否要手动开启？',
                success: function (res) {
                  if (res.confirm) {
                    Taro.openSetting({
                      success: function (res) {
                        console.log(res.authSetting)
                        res.authSetting = {
                          "scope.userInfo": true,
                          "scope.userLocation": true
                        }
                      }
                    })
                  } else if (res.cancel) {
                    Taro.showToast({
                      title: '保存失败',
                      icon: 'close',
                      duration: 2000
                    })
                  }
                }
              })
            }
          })
        } else { // 如果已经授权过，可以直接保存
          savePictureSystem()
        }
      }
    })
  }

  const init = async () => {
    const baseImg = await getSun();
    const ctx = Taro.createCanvasContext('canvas');
    Taro.showLoading({
      title: '生成中...'
    })

    const bg = await Taro.getImageInfo({
      src: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-bg.png',
    })
    ctx.drawImage(bg.path, 0, 0, 280, 384);
    ctx.setFillStyle('#FFFFFF');
    ctx.fillRect(21, 21, 238, 342);

    const goodsImg = await Taro.getImageInfo({
      src: handlePath(dataPic),
    })
    ctx.drawImage(goodsImg.path, 21, 32, 238, 227);

    await draw(baseImg, ctx)

    ctx.setFontSize(14);
    ctx.setFillStyle('#1C253A');
    ctx.fillText(goodsName, 117, 289);

    ctx.setFontSize(11);
    ctx.setFillStyle('#888E9B');
    ctx.fillText('长按识别小程序 立即购买', 117, 318);
    ctx.draw(true,() => {

      Taro.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 280,
        height: 384,
        canvasId: 'canvas',
        success: (result) => {
          console.log(122, result)
          saveImage.current = result.tempFilePath;
          // SetImage(result.tempFilePath)
        },
        fail: (err) => {
          Taro.showToast('图片生成失败！')
        }
      })
    });

    Taro.hideLoading();
    setShareShow(true);




  }
  const getSun = async () => {
    try {
      const scene = await getSetsupDisUtil({
        value: `${skuNo}_${memberCode}_1_${classtreeCode}_${brandCode}`
      })

      const result = await loginMiniCodeByTwoBus({
        page: 'pages/detail/main',
        scene,
        mode: 0,
        width: 120,
        fchannelCode: 'wechatmini',
        memberBcode: memberCode
      })

      return  `${get(result, 'dataObj.dataObj')}`

      // console.log(29, 'data:image/png;base64,'+sun.current);

    }catch (err) {
      console.log(err)
    }
  }

  function draw(baseImg: string, context: any) {
    return new Promise((resolve, reject) => {
      const fs = Taro.getFileSystemManager();
      const codeimg = Taro.env.USER_DATA_PATH + '/' + '.jpg';
      fs.writeFile({
        filePath: codeimg,
        data: baseImg, // code就是接口返回的base64数据(分割掉前面的data:image/png;base64,)
        encoding: 'base64',
        success: () => {
          // console.log(codeimg);
          context.drawImage(codeimg, 30, 274, 72, 72)
          resolve()
        }
      })
    })
  }

  return {
    save,
    shareShow
  }
}
