import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {MineDashboard} from "./components";

const mineJsx = () => {
  const {View} = useComponent();

  return (
    <View className={'mine'}>
      <MineDashboard/>
      <View className={'btn'}>退出登录</View>
    </View>
  )
}

export const Mine = memo(mineJsx);
