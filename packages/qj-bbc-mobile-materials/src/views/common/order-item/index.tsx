import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const orderItemJsx: React.FC = () => {
  const {View} = useComponent();

  const handleType = (type: number) => {
    switch (type) {
      case 1:
        return <View className={'red'}>待付款</View>;
      case 2:
        return <View className={'orange'}>待发货</View>
      case 3:
        return <View className={'blue'}>待收货</View>
      case 4:
        return <View className={'blue'}>已收货</View>
      case 5:
        return <View className={'green'}>交易成功</View>
      case 6:
        return <View className={'grey'}>已取消</View>
      default:
        return ''
    }

  }

  return (
    <View className={'order-item'}>
      <View className={'order-status'}>
        <View className={'order-number'}>
          订单批次号：213213213213213213213123
        </View>
        {
          handleType(2)
        }
      </View>

      <View className={'order-item-info'}>
        <View>下单时间：12312312312312</View>
        <View>商品价格：￥123.213  商品数量：123</View>
      </View>
      <View className={'order-item-info'}>
        <View>张三 1231231313123</View>
        <View>地址地址地址地址的地址地址地址地址的</View>
      </View>

      <View className={'order-item-info-price'}>
        <View className={'blc'}>订单金额:￥1231</View>
        <View className={'blc'}>运费:￥1231</View>
        <View className={'blc'}>优惠:￥1231</View>
        <View className={'blc'}>实付:￥1231</View>
      </View>

      <View className={'default-btn btn'}>立即发货</View>
    </View>
  )
}

export const OrderItem = memo(orderItemJsx);
