import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAccountForm} from 'qj-bbc-mobile-store';

const updateImgJsx = () => {
  const {View} = useComponent();
  const {chooseImg} = useAccountForm();

  return (
    <View className={'accountFormImg'}>
      <View className={'select'} onClick={chooseImg}>选择图片</View>
    </View>
  )
}

export const UpdateImg = memo(updateImgJsx);
