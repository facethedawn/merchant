import React, {memo} from "react";

import {useComponent} from '@brushes/simulate-component';
import {GoodsItemLite} from "../../../common";

const goodsInfoJsx: React.FC<any> = ({data}) => {
  const {View} = useComponent();

  const {goodsList} = data

  return (
    <View className={'goods-info'}>
      {
        goodsList.map((item: any, index: number) => <GoodsItemLite key={index} item={item}/>)
      }
    </View>
  )
}

export const GoodsInfo = memo(goodsInfoJsx);
