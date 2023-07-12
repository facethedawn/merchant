import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {GoodsItem} from "../../common";

const sideContentJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();
  return (
    <View className={'side-content'}>
      <View className={'dashboard'}>
        <View>全部商品 all goods</View>
        <View>筛选</View>
      </View>
      <View className={'goods-wrap'}>
        <ScrollView
        >
          <GoodsItem/>
        </ScrollView>
      </View>
    </View>
  )
}

export const SideContent = memo(sideContentJsx);
