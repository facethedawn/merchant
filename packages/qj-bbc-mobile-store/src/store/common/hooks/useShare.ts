// @ts-nocheck

import {getTaro} from "@brushes/utils";
import {useEffect, useRef} from "react";



export const useShare = () => {

  const posterBgImage = useRef('https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-bg.png');

  const goodImg = useRef('https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share.png');

  const saveImage = useRef('');

  useEffect(() => {
    init();

  }, []);


  // 把图片保存到系统中
  const savePictureSystem = () => {
    const Taro = getTaro();
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

    console.log(46)
    const Taro = getTaro();
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
                      title: '保存失败！',
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
    const Taro = getTaro();
    const ctx = Taro.createCanvasContext('canvas');

    const bg = await Taro.getImageInfo({
      src: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-bg.png',
    })
    ctx.drawImage(bg.path, 0, 0, 280, 384);
    ctx.setFillStyle('#FFFFFF');
    ctx.fillRect(21, 21, 238, 342);

    const goodsImg = await Taro.getImageInfo({
      src: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share.png',
    })

    ctx.drawImage(goodsImg.path, 21, 32, 238, 227);

    ctx.setFontSize(14);
    ctx.setFillStyle('#1C253A');
    ctx.fillText('商品标题', 117, 289);

    ctx.setFontSize(11);
    ctx.setFillStyle('#888E9B');
    ctx.fillText('长按识别小程序 立即购买', 117, 318);

    ctx.draw();

    setTimeout(() => {
      Taro.canvasToTempFilePath({
        x:0,
        y:0,
        width: 280,
        height: 384,
        canvasId: 'canvas',
        success: (result) => {
          console.log(77, result)
          saveImage.current = result.tempFilePath;
          // SetImage(result.tempFilePath)
        },
        fail: (err) => {
          Taro.showToast('图片生成失败！')
        }
      })
    }, 600)



    // ctx.stroke()
    // ctx.draw()


  }


  return {
    save
  }
}
