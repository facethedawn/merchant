import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const priceInfoJsx = () => {
  const {View, SmoothView} = useComponent();

  return (
    <View className={'order-info'}>
      <View className={'order-info-item'}>
        <View className={'lPart'}>订单总金额</View>
        <SmoothView className={'rPart'}>￥ 123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>优惠券总金额</View>
        <SmoothView className={'rPart'}>￥ 123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>运费</View>
        <SmoothView className={'rPart'}>￥ 123123123213</SmoothView>
      </View>
      <View className={'order-info-item all-price'}>
        <View className={'lPart'}>实付总金额</View>
        <SmoothView className={'rPart'}>￥ 538</SmoothView>
      </View>
    </View>
  )
}

export const PriceInfo = memo(priceInfoJsx);
