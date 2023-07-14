import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {config} from './config';
import {OrderItem, Search} from "../common";


const orderListJsx:React.FC = () => {
  const {View, ScrollView} = useComponent();

  return (
    <ScrollView
      scrollY
      style={{
        height: '100%'
      }}
    >
      <Search />
      <View className={'order-list'}>
        <View className={'tab'}>
          {
            config.map((item, index) => {
              return (
                <View className={'tab-item active'} key={index}>{item.label}</View>
              )
            })
          }
        </View>

        <View className={'order-content'}>
          <OrderItem/>
        </View>
      </View>
    </ScrollView>
  )
}


export const OrderList = memo(orderListJsx);
