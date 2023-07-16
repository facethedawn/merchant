import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const goodsRulesJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View>商品规则</View>
  )
}

export const GoodsRules = memo(goodsRulesJsx);
