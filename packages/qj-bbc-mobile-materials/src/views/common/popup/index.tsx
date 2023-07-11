import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const PopupJsx = () => {
  const {View} = useComponent();
  return (
    <View className={'popupWrap'}>pop</View>
  )
}

export const Popup = memo(PopupJsx)
