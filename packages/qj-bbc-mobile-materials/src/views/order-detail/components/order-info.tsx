import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const orderInfoJsx = () => {
  const {View, SmoothView} = useComponent();

  return (
    <View className={'order-info'}>
      <View className={'order-info-item'}>
        <View className={'lPart'}>订单批次号</View>
        <SmoothView className={'rPart'}>123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>商家订单号</View>
        <SmoothView className={'rPart'}>123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>下单时间</View>
        <SmoothView className={'rPart'}>123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>支付方式</View>
        <SmoothView className={'rPart'}>123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>配送方式</View>
        <SmoothView className={'rPart'}>123123123213</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>备注</View>
        <SmoothView className={'rPart tip'}>123123123213</SmoothView>
      </View>
    </View>
  )
}

export const OrderInfo = memo(orderInfoJsx)
