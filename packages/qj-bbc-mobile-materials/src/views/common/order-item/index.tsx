import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import dayjs from 'dayjs';


const orderItemJsx: React.FC<any> = ({item, goFillIn, goOrderDetail, type, handleCheckReturnOrder, cancelOrder}) => {
  const {View} = useComponent();



  const handleType = (dataState: number, type: string) => {
    if(type === 'order') {
      switch (dataState) {
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
    }else if (type === 'returnOrder') {
      switch (dataState) {
        case 0:
          return <View className={'red'}>待审核</View>;
        case -2:
          return <View className={'grey'}>审核拒绝</View>
        case 8:
          return <View className={'green'}>审核通过</View>
        default:
          return ''
      }
    }
  }

  const deliveryType = (contractPumode: string) => {
    switch (contractPumode) {
      case '1':
        return '自提';
      case '0':
        return '快递';
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
    refundMeo,
    refundMoney,
    contractPumode,
    contractId
  } = item;

  return (
    <View className={'order-item'}>
      <View onClick={goOrderDetail.bind(null, item)}>
        <View className={'order-status'}>
          <View className={'order-number'}>
            订单批次号：{contractBbillcode}
          </View>
          {
            handleType(dataState, type)
          }
        </View>

        {
          type === 'returnOrder'?
            <View className={'return-order-reason'}>退单理由：{refundMeo}</View>: null
        }

        <View className={'order-item-info'}>
          <View>下单时间：{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</View>
          <View>商品价格：￥{goodsMoney}  商品数量：{goodsNum}</View>
        </View>
        <View className={'order-item-info'}>
          <View>配送方式：{deliveryType(contractPumode)}</View>
          <View>{goodsReceiptMem} {goodsReceiptPhone}</View>
          <View>{goodsReceiptArrdess}</View>
        </View>

        {
          type === 'returnOrder'?
            <View className={'return-order-price'}>退单金额：{refundMoney}</View>: null
        }

        {/*<View className={'order-item-info-price'}>*/}
        {/*  <View className={'blc'}>订单金额:￥1231</View>*/}
        {/*  <View className={'blc'}>运费:￥1231</View>*/}
        {/*  <View className={'blc'}>优惠:￥1231</View>*/}
        {/*  <View className={'blc'}>实付:￥1231</View>*/}
        {/*</View>*/}
      </View>

      {
        dataState === 2 && type === 'order'?
          <View className={'default-btn btn'} onClick={goFillIn.bind(null, item)}>立即发货</View>
          : null
      }

      {
        dataState === 1 && type === 'order'?
          <View className={'default-btn btn'} onClick={cancelOrder.bind(null, contractId)}>取消订单</View>
          : null
      }

      {
        dataState === 0 && type === 'returnOrder'?
          <View className={'return-order-dashboard'}>
            <View className={'l-btn btn'} onClick={handleCheckReturnOrder.bind(null, item, 'refuse')}>审核拒绝</View>
            <View className={'r-btn btn'} onClick={handleCheckReturnOrder.bind(null, item, 'pass')}>审核通过</View>
          </View>: null
      }
    </View>
  )
}

export const OrderItem = memo(orderItemJsx);
