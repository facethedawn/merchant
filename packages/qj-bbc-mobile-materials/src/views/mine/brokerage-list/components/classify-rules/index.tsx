import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {useClassifyRules} from 'qj-bbc-mobile-store';

const classifyRulesJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();

  const {onScroll, list} = useClassifyRules();

  return (
    <View className={'classify-rules'}>
      <ScrollView
        onScroll={onScroll}
      >
        {
          list.map((item,index) => {
            const {dataState, dpriceConfValuen,dpriceConfPrice} = item;

            return <View className={'classify-rules-item'} key={index}>
              <View className={'l-part'}>{dpriceConfValuen}</View>
              <View className={'r-part'}>{dpriceConfPrice} {dataState === 0 ? '元' : '%'}</View>
            </View>
          })
        }
      </ScrollView>
    </View>
  )
}

export const ClassifyRules = memo(classifyRulesJsx);
