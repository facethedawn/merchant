import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import dayjs from "dayjs";

const orderInfoJsx: React.FC<any> = ({data}) => {
  const {View, SmoothView, gmtCreate} = useComponent();

  const {contractBillcode, contractBbillcode, contractPmode, contractRemark, packageList} = data;

  return (
    <View className={'order-info'}>
      <View className={'order-info-item'}>
        <View className={'lPart'}>订单批次号</View>
        <SmoothView className={'rPart'}>{contractBbillcode}</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>商家订单号</View>
        <SmoothView className={'rPart'}>{contractBillcode}</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>下单时间</View>
        <SmoothView className={'rPart'}>{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>支付方式</View>
        <SmoothView className={'rPart'}>{contractPmode === '1' ? '线下' : '线上'}</SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>配送方式</View>
        <SmoothView className={'rPart'}>
          {
            (() => {
              if (packageList?.length) {
                if (packageList[0].packageMode === 1) {
                  return '自提'
                }else {
                  console.log(12313123123)
                  return '快递'
                }
              } else {
                console.log(123123213)
                return '未知';
              }
            })()
          }
        </SmoothView>
      </View>
      <View className={'order-info-item'}>
        <View className={'lPart'}>备注</View>
        <SmoothView className={'rPart tip'}>{contractRemark?contractRemark: '无'}</SmoothView>
      </View>
    </View>
  )
}

export const OrderInfo = memo(orderInfoJsx)
