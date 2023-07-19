import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {getHost} from "qj-bbc-mobile-store";

const goodsItemLiteJsx: React.FC<any> = ({item}) => {
  const {View, SmoothView, Image} = useComponent();
  const {
    goodsName,
    skuName,
    pricesetNprice,
    goodsNum,
    dataPic
  } = item;

  return (
    <View className={'goods-item-lite'}>
      <Image
        src={`${getHost()}${dataPic}`}
        mode='widthFix'
        className='img'
      />

      <View className={'r-part'}>
        <View className={'first-line'}>
          <SmoothView className={'goods-name'}>{goodsName}</SmoothView>
          <SmoothView className={'price'}>￥{pricesetNprice}</SmoothView>
        </View>
        <View className={'second-line'}>
          <SmoothView className={'goods-size'}>{skuName}</SmoothView>
          <SmoothView className={'goods-number'}>x {goodsNum}</SmoothView>
        </View>
      </View>

    </View>
  )
}

export const GoodsItemLite = memo(goodsItemLiteJsx)
