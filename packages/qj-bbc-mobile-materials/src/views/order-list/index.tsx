import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {config} from './config';
import {OrderItem, Search} from "../common";
import {useCommonSearch} from "../../../../qj-bbc-mobile-store";


const orderListJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();
  const {sysBtnObj} = useCommonSearch()

  return (
    <View className={'order-list'}>
      <Search/>
      <View className={'tab'}>
        {
          config.map((item, index) => {
            return (
              <View className={'tab-item active'} key={index}>{item.label}</View>
            )
          })
        }
      </View>
        <View
          className={'order-content'}
          style={{
            height: `calc(100vh - ${sysBtnObj.top}PX - ${sysBtnObj.height}PX - 8PX - 44PX)`
          }}
        >
          <ScrollView
            scrollY
          >
          <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
          </ScrollView>
        </View>
    </View>
  )
}


export const OrderList = memo(orderListJsx);
