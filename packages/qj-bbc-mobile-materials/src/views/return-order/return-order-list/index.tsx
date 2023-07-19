import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {config, searchConfig} from './config';
import {CommonTab, OrderItem, Search, SearchTopWrap} from "../../common";
import {useCommonSearch, useReturnOrderList} from "qj-bbc-mobile-store";

const returnOrderListJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();
  const {sysBtnObj} = useCommonSearch();

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
  } = useReturnOrderList({config, searchConfig});

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
            list.map((item: any, index: number) => <OrderItem item={item} goOrderDetail={goOrderDetail} goFillIn={goFillIn} key={index}/>)
          }
        </ScrollView>
      </View>
    </View>
  )
}

export const ReturnOrderList = memo(returnOrderListJsx);
