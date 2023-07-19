import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {config} from './config';
import {CommonTab, OrderItem} from "../../common";
import {useCommonSearch, useOrder} from "qj-bbc-mobile-store";
import {ScrollView} from '@tarojs/components';


const orderListJsx: React.FC = () => {
  const {View} = useComponent();
  const {sysBtnObj} = useCommonSearch()

  const {list, goFillIn} = useOrder();

  console.log(14, list);

  return (
    <View className={'order-list'}>
      {/*<Search/>*/}
        <CommonTab config={config} />
        <View
          className={'order-content'}
          style={{
            height: `calc(100vh - ${sysBtnObj.top}PX - ${sysBtnObj.height}PX - 8PX - 44PX)`
          }}
        >
          <ScrollView
            scrollY
            style={{height: '100%'}}
          >
          {/*<OrderItem/>*/}
            {/*<OrderItem/>*/}
            {/*<OrderItem/>*/}
            {/*<OrderItem/>*/}
            {/*<OrderItem/>*/}
            {/*<OrderItem/>*/}
            {
              list.map((item: any, index: number) => <OrderItem item={item} goFillIn={goFillIn} key={index}/>)
            }
          </ScrollView>
        </View>
    </View>
  )
}


export const OrderList = memo(orderListJsx);
