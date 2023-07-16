import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const commonTabJsx: React.FC<any> = ({config, style}) => {
  const {View} = useComponent();

  return (
    <View className={'common-tab'} style={style}>
      {
        config.map((item: any, index: number) => {
          return (
            <View className={'tab-item active'} key={index}>{item.label}</View>
          )
        })
      }
    </View>
  )
}

export const CommonTab = memo(commonTabJsx);
