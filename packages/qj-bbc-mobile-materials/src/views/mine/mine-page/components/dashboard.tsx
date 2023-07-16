import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {MineList} from "./mine-list";

const mineDashboardJsx = () => {
  const {View, Image} = useComponent();

  return (
    <View className={'mine'}>
      <View className={'mine-dashboard'}>
        <View className={'bg'}>
          <Image
            src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/arrow-down.png'
            mode='widthFix'
            className='logo'
          />
          <View className={'companyName'}>上海腾讯科技有限公司</View>
        </View>
        <MineList/>
      </View>
    </View>
  )
}

export const MineDashboard = memo(mineDashboardJsx);
