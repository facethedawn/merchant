import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {SetInventory} from "./components";

const goodsItemJsx = () => {
  const {View} = useComponent();
  return (
    <View className='goods-item'>
      <View>
        商品信息
      </View>
      <View>
        <SetInventory/>
        <View>上下架</View>
      </View>
    </View>
  )
}

export const GoodsItem = memo(goodsItemJsx);
