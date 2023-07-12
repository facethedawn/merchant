import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {Search} from "../common";
import {SideBar, SideContent} from "./components";

const goodsListJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View className={'goods-list'}>
      <Search/>
      <View className={'goods-list-content'}>
        <SideBar/>
        <SideContent/>
      </View>
    </View>
  )
}

export const GoodsList = memo(goodsListJsx);
