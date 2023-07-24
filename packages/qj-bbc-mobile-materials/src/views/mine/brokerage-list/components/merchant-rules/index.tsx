import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {useMerchantRules} from "qj-bbc-mobile-store";

const merchantRulesJsx: React.FC = () => {
  const {View} = useComponent();

  const {list} = useMerchantRules();

  console.log(10, list);

  return (
    <View className={'merchant-rules'}>
      商家规则
    </View>
  )
}

export const MerchantRules = memo(merchantRulesJsx);
