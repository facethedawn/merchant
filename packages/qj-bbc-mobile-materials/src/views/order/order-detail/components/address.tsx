import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const addressJsx:React.FC<any> = ({data}) => {
  const {View, SmoothView, Image} = useComponent();

  const {goodsReceiptPhone, goodsReceiptArrdess, goodsReceiptMem} = data

  return (
    <View className={'address'}>
      <Image
        src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/location.png'
        mode='widthFix'
        className='icon'
      />
      <View className={'info'}>
        <View className={'user-info'}>
          <SmoothView className={'user-name'}>{goodsReceiptMem}</SmoothView>
          <SmoothView className={'user-phone'}>{goodsReceiptPhone}</SmoothView>
        </View>
        <SmoothView className={'user-address'}>{goodsReceiptArrdess}</SmoothView>
      </View>
    </View>
  )
}

export const Address = memo(addressJsx);
