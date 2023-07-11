import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const goodsListJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View>goods</View>
  )
}

export const GoodsList = memo(goodsListJsx);
