import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import dayjs from 'dayjs';


const orderItemJsx: React.FC<any> = ({item, goFillIn, goOrderDetail}) => {
  const {View} = useComponent();



  const handleType = (type: number) => {
    switch (type) {
      case 1:
        return <View className={'red'}>待付款</View>;
      case 2:
        return <View className={'orange'}>待发货</View>
      case 3:
        return <View className={'blue'}>已发货</View>
      case 4:
        return <View className={'blue'}>已收货</View>
      case 5:
        return <View className={'green'}>交易成功</View>
      case -1:
        return <View className={'grey'}>已取消</View>
      default:
        return ''
    }
  }

  const {
    contractBbillcode,
    gmtCreate,
    goodsMoney,
    goodsNum,
    goodsReceiptMem,
    goodsReceiptArrdess,
    goodsReceiptPhone,
    dataState,
  } = item;

  return (
    <View className={'order-item'}>
      <View onClick={goOrderDetail.bind(null, item)}>
        <View className={'order-status'}>
          <View className={'order-number'}>
            订单批次号：{contractBbillcode}
          </View>
          {
            handleType(dataState)
          }
        </View>

        <View className={'order-item-info'}>
          <View>下单时间：{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</View>
          <View>商品价格：￥{goodsMoney}  商品数量：{goodsNum}</View>
        </View>
        <View className={'order-item-info'}>
          <View>{goodsReceiptMem} {goodsReceiptPhone}</View>
          <View>{goodsReceiptArrdess}</View>
        </View>

        {/*<View className={'order-item-info-price'}>*/}
        {/*  <View className={'blc'}>订单金额:￥1231</View>*/}
        {/*  <View className={'blc'}>运费:￥1231</View>*/}
        {/*  <View className={'blc'}>优惠:￥1231</View>*/}
        {/*  <View className={'blc'}>实付:￥1231</View>*/}
        {/*</View>*/}
      </View>

      {
        dataState === 2?
          <View className={'default-btn btn'} onClick={goFillIn.bind(null, item)}>立即发货</View>
          : null
      }
    </View>
  )
}

export const OrderItem = memo(orderItemJsx);
