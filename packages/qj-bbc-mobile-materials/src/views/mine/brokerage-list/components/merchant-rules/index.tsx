import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const merchantRulesJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View className={'merchant-rules'}>
      商家规则
    </View>
  )
}

export const MerchantRules = memo(merchantRulesJsx);
