import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {config, searchConfig} from './config';
import {CommonTab, OrderItem, Search, SearchTopWrap} from "../../common";
import {useCommonSearch, useOrder} from "qj-bbc-mobile-store";


const orderListJsx: React.FC<any> = ({refreshNum}) => {
  const {View, ScrollView} = useComponent();
  const {sysBtnObj} = useCommonSearch()

  const {
    list,
    goFillIn,
    goOrderDetail,
    coe,
    changeTab,
    onScroll,
    searchCoe,
    changeSearchType,
    onFinish,
    changeSearchContent
  } = useOrder({config, searchConfig, refreshNum});


  return (
    <View className={'order-list'}>
      <SearchTopWrap>
        <Search config={searchConfig} changeSearchType={changeSearchType} value={searchCoe} onFinish={onFinish} onChange={changeSearchContent} />
      </SearchTopWrap>
        <CommonTab config={config} coe={coe} changeTab={changeTab} />
        <View
          className={'order-content'}
          style={{
            height: `calc(100vh - ${sysBtnObj.top}PX - ${sysBtnObj.height}PX - 8PX - 44PX)`
          }}
        >
          <ScrollView
            onScroll={onScroll}
          >
            {
              list.map((item: any, index: number) => <OrderItem
                item={item}
                goOrderDetail={goOrderDetail}
                goFillIn={goFillIn}
                key={index}
                type={'order'}
              />)
            }
          </ScrollView>
        </View>
    </View>
  )
}


export const OrderList = memo(orderListJsx);
