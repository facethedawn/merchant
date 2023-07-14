import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const addressJsx:React.FC = () => {
  const {View, SmoothView, Image} = useComponent();

  return (
    <View className={'address'}>
      <Image
        src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/location.png'
        mode='widthFix'
        className='icon'
      />
      <View className={'info'}>
        <View className={'user-info'}>
          <SmoothView className={'user-name'}>张三</SmoothView>
          <SmoothView className={'user-phone'}>13512345678</SmoothView>
        </View>
        <SmoothView className={'user-address'}>上海市浦东新区南汇新城镇水华路300号</SmoothView>
      </View>
    </View>
  )
}

export const Address = memo(addressJsx);
