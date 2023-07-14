import React, {memo} from "react";

import {useComponent} from '@brushes/simulate-component';
import {GoodsItemLite} from "../../common";

const goodsInfoJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View className={'goods-info'}>
      <GoodsItemLite/>
      <GoodsItemLite/>
      <GoodsItemLite/>
    </View>
  )
}

export const GoodsInfo = memo(goodsInfoJsx);
