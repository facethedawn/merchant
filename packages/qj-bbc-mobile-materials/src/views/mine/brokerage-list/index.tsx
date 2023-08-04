import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {CommonTab} from "../../common";
import {config} from './config';
// import {BrokerageCommonList, ClassifyRules, GoodsRules, MerchantRules} from "./components";
import {useBrokerageList} from "qj-bbc-mobile-store";
import {ClassifyRules, GoodsRules, MerchantRules} from "./components";

const brokerageListJsx = () => {
  const {View} = useComponent();

  const {coe, changeTab} = useBrokerageList();

  return (
    <View className={'brokerage-list'}>
      <CommonTab config={config} coe={coe} changeTab={changeTab}/>

      {
        coe === 0 ? <MerchantRules/> : null
      }

      {
        coe === 1?<ClassifyRules/>: null
      }

      {
        coe === 2?<GoodsRules/>: null
      }


      {/*<View>*/}
      {/*  <ClassifyRules/>*/}
      {/*  <GoodsRules/>*/}
      {/*  <MerchantRules/>*/}
      {/*  <BrokerageCommonList/>*/}
      {/*</View>*/}
    </View>
  )
}

export const BrokerageList = memo(brokerageListJsx);
