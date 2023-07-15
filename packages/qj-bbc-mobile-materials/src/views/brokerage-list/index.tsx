import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const brokerageListJsx = () => {
  const {View} = useComponent();

  return (
    <View>佣金查看</View>
  )
}

export const BrokerageList = memo(brokerageListJsx);
