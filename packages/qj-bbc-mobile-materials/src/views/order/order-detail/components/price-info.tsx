import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const priceInfoJsx:React.FC<any> = ({data}) => {
  const {View, SmoothView} = useComponent();

  const {goodsLogmoney, contractInmoney, goodsPmoney, dataBmoney} = data;

  return (
    <View className={'order-info'}>
      <View className={'order-info-item'}>
        <View className={'lPart'}>订单总金额</View>
        <SmoothView className={'rPart'}>￥ {goodsLogmoney}</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>优惠券总金额</View>
        <SmoothView className={'rPart'}>￥ {contractInmoney}</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>运费</View>
        <SmoothView className={'rPart'}>￥ {goodsPmoney}</SmoothView>
      </View>
      <View className={'order-info-item all-price'}>
        <View className={'lPart'}>实付总金额</View>
        <SmoothView className={'rPart'}>￥ {dataBmoney}</SmoothView>
      </View>
    </View>
  )
}

export const PriceInfo = memo(priceInfoJsx);
