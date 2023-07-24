import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {MineDashboard} from "./components";
import {useMine} from 'qj-bbc-mobile-store';


const minePageJsx = () => {
  const {View} = useComponent();
  const {logOut, config, merchantInfo} = useMine();

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
