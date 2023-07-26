import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const updateImgJsx: React.FC<any> = ({handle, img}) => {
  const {View, Image} = useComponent();

  return (
    <View className={'accountFormImg'}>
      {
        img === '' ?
          <View className={'select'} onClick={handle}>请选择图片</View> :
          <Image
            src={img}
            mode='widthFix'
            className='img'
            onClick={handle}
          />
      }
    </View>
  )
}

export const UpdateImg = memo(updateImgJsx);
