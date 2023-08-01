import {useComponent} from "@brushes/simulate-component";
import React, {memo} from "react";
import {useShare} from "qj-bbc-mobile-store";


const shareJsx:React.FC<any> = () => {
  const {View, Canvas, Image, Button} = useComponent();
  const {save} = useShare();


  return (
    <View className={'share'}>

      <View className={'share-content'}>
        <View className={'share-canvas'}>
          <Canvas
            canvasId='canvas'
            style={{
              width:'280px',
              height:'384px',
              position: 'fixed',
              zIndex: 999
            }}></Canvas>
        </View>
        <View className={'dashboard'}>
          <View className={'dashboard-item'}>
            <Image
              src={'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-icon-wx.png'}
              className={'icon'}
            />
            <Button className={'txt'} open-type={'share'}>微信分享</Button>
          </View>
          <View className={'dashboard-item'}>
            <Image
              src={'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share-icon-img.png'}
              className={'icon'}
            />
            <View className={'txt'} onClick={save}>保存图片</View>
          </View>
        </View>
      </View>


    </View>
  )
}


export const Share = memo(shareJsx);
