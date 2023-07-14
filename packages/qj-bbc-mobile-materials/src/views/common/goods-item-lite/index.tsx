import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const goodsItemLiteJsx: React.FC = () => {
  const {View, SmoothView, Image} = useComponent();

  return (
    <View className={'goods-item-lite'}>
      <Image
        src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/location.png'
        mode='widthFix'
        className='img'
      />

      <View className={'r-part'}>
        <View className={'first-line'}>
          <SmoothView className={'goods-name'}>这一行是商品标题</SmoothView>
          <SmoothView className={'price'}>￥9999</SmoothView>
        </View>
        <View className={'second-line'}>
          <SmoothView className={'goods-size'}>s/绿色</SmoothView>
          <SmoothView className={'goods-number'}>x 12</SmoothView>
        </View>
      </View>

    </View>
  )
}

export const GoodsItemLite = memo(goodsItemLiteJsx)
