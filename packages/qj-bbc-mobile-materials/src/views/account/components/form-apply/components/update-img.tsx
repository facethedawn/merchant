import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const updateImgJsx:React.FC<any> = ({handle}) => {
  const {View} = useComponent();

  return (
    <View className={'accountFormImg'}>
      <View className={'select'} onClick={handle}>选择图片</View>
    </View>
  )
}

export const UpdateImg = memo(updateImgJsx);
