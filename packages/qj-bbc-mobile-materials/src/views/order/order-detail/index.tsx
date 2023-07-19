import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {Address, GoodsInfo, OrderInfo, PriceInfo} from "./components";
import {useOrderDetail} from 'qj-bbc-mobile-store';

const oderDetailJsx:React.FC<any> = ({contractBillcode}) => {
  const {View, WrapLoading} = useComponent();

  const {loading, data} = useOrderDetail({contractBillcode})

  return (

    <View className={'order-detail'}>
      <WrapLoading loading={loading}>
        <Address data={data} />
        <GoodsInfo data={data}/>
        <OrderInfo data={data}/>
        <PriceInfo/>
      </WrapLoading>
    </View>

  )
}

export const OrderDetail = memo(oderDetailJsx);
