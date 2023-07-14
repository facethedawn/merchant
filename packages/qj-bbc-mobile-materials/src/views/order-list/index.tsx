// @ts-nocheck
import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {jumpLink, showModal, useTestStore} from 'qj-bbc-mobile-store';
import {Popup} from "../common";

const { SideBar } = antdMobile;

const orderListJsx:React.FC = () => {
  const {View, ScrollView} = useComponent();
  const {info} = useTestStore();

  console.log(13, info);
  return (
    <ScrollView
      scrollY
      style={{
        height: '100%'
      }}
    >
      <View className={'goodsList'}>

        商品列表

        <View onClick={jumpLink}>button</View>

        <View onClick={showModal.bind(null, '123123', '213')}>modal</View>

        {/*<Popup/>*/}

        <SideBar
          style={{
            '--width': '90px',
            '--background-color': '#f5f5f5'
          }}
        >

        </SideBar>


      </View>
    </ScrollView>
  )
}


export const OrderList = memo(orderListJsx);
