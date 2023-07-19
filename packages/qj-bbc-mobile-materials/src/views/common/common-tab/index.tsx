import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const commonTabJsx: React.FC<any> = ({config, style, coe, changeTab}) => {
  const {View} = useComponent();

  return (
    <View className={'common-tab'} style={style}>
      {
        config.map((item: any, index: number) => {
          return (
            <View
              className={`tab-item ${coe === index? 'active': ''}`}
              key={index}
              onClick={changeTab.bind(null, index)}
            >{item.label}</View>
          )
        })
      }
    </View>
  )
}

export const CommonTab = memo(commonTabJsx);
