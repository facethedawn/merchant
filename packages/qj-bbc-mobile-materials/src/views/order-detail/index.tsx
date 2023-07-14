import{memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {Address, GoodsInfo, OrderInfo, PriceInfo} from "./components";

const oderDetailJsx = () => {
  const {View, WrapLoading} = useComponent();

  return (

    <View className={'order-detail'}>
      <WrapLoading loading={false}>
        <Address/>
        <GoodsInfo/>
        <OrderInfo/>
        <PriceInfo/>
      </WrapLoading>
    </View>

  )
}

export const OrderDetail = memo(oderDetailJsx);
