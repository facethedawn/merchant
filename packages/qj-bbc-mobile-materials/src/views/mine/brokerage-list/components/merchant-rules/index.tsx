import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {useMerchantRules} from "qj-bbc-mobile-store";

const merchantRulesJsx: React.FC = () => {
  const {View} = useComponent();

  const {list} = useMerchantRules();

  const {dataState, dpriceConfPrice} = list[0];


  return (
    <View className={'merchant-rules'}>
      <View className={'merchant-rules-item'}>
        <View className={'l-part'}>抽佣比例/固定金额</View>
        <View className={'r-part'}>{dpriceConfPrice}{dataState === 1 ? '元' : '%'}</View>
      </View>
    </View>
  )
}

export const MerchantRules = memo(merchantRulesJsx);
