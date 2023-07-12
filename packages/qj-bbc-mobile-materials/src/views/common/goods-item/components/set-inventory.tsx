import {useComponent} from "@brushes/simulate-component";
import {memo} from "react";

const setInventoryJsx = () => {
  const {View, Popup} = useComponent();

  return (
    <View>
      <View>设置库存/价格</View>
      <Popup popupVisible={false} popupHandler={() => {}} >
        <View>13</View>
      </Popup>
    </View>
  )
}

export const SetInventory = memo(setInventoryJsx);
