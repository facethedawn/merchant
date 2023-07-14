import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {Search} from "../common";
import {SideBar, SideContent} from "./components";
import {useCommonSearch, useGoodsList} from 'qj-bbc-mobile-store';

const goodsListJsx: React.FC = () => {
  const {View} = useComponent();
  const {sysBtnObj} = useCommonSearch()
  const {list, all} = useGoodsList({param: '', refreshNum: 0});

  console.log(12, list, all);


  return (
    <View className={'goods-list'}>
      <Search/>
      <View
        className={'goods-list-content'}
        style={{
          height: `calc(100% - ${sysBtnObj.top}PX - ${sysBtnObj.height}PX - 8px)`
        }}
      >
        <SideBar />
        <SideContent list={list} all={all} />
      </View>
    </View>
  )
}

export const GoodsList = memo(goodsListJsx);
