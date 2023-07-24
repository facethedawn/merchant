import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {MineList} from "./mine-list";
import {getHost} from "qj-bbc-mobile-store";

const mineDashboardJsx:React.FC<any> = ({config, merchantInfo}) => {
  const {View, Image} = useComponent();

  const {userinfoCompname, userinfoLogo} = merchantInfo;


  return (
    <View className={'mine'}>
      <View className={'mine-dashboard'}>
        <View className={'bg'}>
          <Image
            src={`${getHost()}${userinfoLogo}`}
            className='merchant-logo'
          />
          <View className={'companyName'}>{userinfoCompname}</View>
        </View>
        <MineList config={config} />
      </View>
    </View>
  )
}

export const MineDashboard = memo(mineDashboardJsx);
