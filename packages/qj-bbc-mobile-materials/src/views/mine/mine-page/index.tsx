import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {MineDashboard} from "./components";
import {useMine} from 'qj-bbc-mobile-store';


const minePageJsx:React.FC<any> = ({refreshNum}) => {
  const {View} = useComponent();
  const {logOut, config, merchantInfo} = useMine({refreshNum});

  console.log(11, merchantInfo)

  return (
    <View className={'mine'}>
      <MineDashboard
        config={config}
        merchantInfo={merchantInfo}
      />
      <View className={'btn'} onClick={logOut}>退出登录</View>
    </View>
  )
}

export const MinePage = memo(minePageJsx);
