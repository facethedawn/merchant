import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const brokerageCommonListJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View className={'brokerage-common-list'}>
      <View className={'brokerage-common-list-item'}>
        <View className={'l-part'}>商家结算比例</View>
        <View className={'r-part'}>123123%</View>
      </View>
    </View>
  )
}

export const BrokerageCommonList = memo(brokerageCommonListJsx);
