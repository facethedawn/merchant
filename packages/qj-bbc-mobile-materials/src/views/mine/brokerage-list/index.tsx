import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {CommonTab} from "../../common";
import {config} from './config';
import {BrokerageCommonList, ClassifyRules, GoodsRules, MerchantRules} from "./components";

const brokerageListJsx = () => {
  const {View} = useComponent();

  return (
    <View className={'brokerage-list'}>
      <CommonTab config={config} style={{
        padding: '0 40px'
      }}/>
      <View>
        <ClassifyRules/>
        <GoodsRules/>
        <MerchantRules/>
        <BrokerageCommonList/>
      </View>
    </View>
  )
}

export const BrokerageList = memo(brokerageListJsx);
