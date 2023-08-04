import {useComponent} from "@brushes/simulate-component";
import React, {memo} from "react";
import {useShare} from "qj-bbc-mobile-store";


const shareJsx:React.FC<any> = ({setShareShow, item}) => {
  const {View, Canvas, Image, Button} = useComponent();
  const {save, shareShow} = useShare({item});

  return (
    <View className={`share`} onClick={() => {
      setShareShow(false);
    }}>
      {
        shareShow?
          <View className={'share-content'} onClick={(e: any) => {
            e.stopPropagation();
          }}>
            <View className={'share-canvas'}>
              <Canvas
                canvas-id='canvas'
                style={{
                  width:'280px',
                  height:'384px',
                  position: 'fixed',
                  zIndex: 999
                }}></Canvas>
            </View>
            <View className={'dashboard'}>
              <View className={'dashboard-item'}>
                <Button className={'txt'} open-type={'share'}>
                  <Image
                    src={'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-icon-wx.png'}
                    className={'icon'}
                  />
                  微信分享
                </Button>
              </View>
              <View className={'dashboard-item'} onClick={save}>
                <Image
                  src={'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-icon-img.png'}
                  className={'icon'}
                />
                <Button className={'txt'}>保存图片</Button>
              </View>
            </View>
          </View>: null
      }
    </View>
  )
}

export const Share = memo(shareJsx);
