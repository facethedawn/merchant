import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import { useFullPath } from '../../../../hooks';


const goodsPopupContentJsx:React.FC<any> = (
  {
    popupShow,
    setPopupShow,
    chooseItem,
    inventory,
    setInventoryMin,
    setInventoryMax,
    changeGoodsInfoSubmit,
    changeInventory,
    price,
    changePrice,
    changeInventoryNum
  }) => {

  const {View, Popup, Image, Input} = useComponent();
  const {goodsName, dataPic, goodsShowno, goodsNum, pricesetNprice, skuName} = chooseItem

  return (
    <Popup popupVisible={popupShow} popupHandler={() => {setPopupShow(false)}}>
      <View className={'goods-list-popup'}>

        <View className={'goods-list-popup-item'}>
          <Image
            src={useFullPath(dataPic)}
            mode='widthFix'
            className='l-part'
          />
          <View className={'r-part'}>
            <View className={'title'}>{goodsName}</View>
            <View className={'list'}>
              <View className={'list-item'}>商品编号：{goodsShowno}</View>
              <View className={'list-item'}>规格：{skuName}</View>
              <View className={'list-item info'}>
                <View>库存： {goodsNum}</View>
                <View className={'price'}>￥ {pricesetNprice}</View>
              </View>
            </View>
          </View>
        </View>

        <View className={'goods-list-popup-list-item'}>
          <View className={'l-part'}>库存：</View>
          <View className={'inventory-item'}>
            <View className={'btn'} onClick={setInventoryMin}>归零</View>
            <View className={'inventory'}>
              <View className={'inventory-minus'} onClick={() => changeInventoryNum('minus')}>-</View>
              <Input className={'fill-in'} type={'number'} value={inventory} onChange={changeInventory} />
              <View className={'inventory-plus'} onClick={() => changeInventoryNum('plus')}>+</View>
            </View>
            <View className={'btn'} onClick={setInventoryMax}>9999</View>
          </View>
        </View>

        <View className={'goods-list-popup-list-item'}>
          <View className={'l-part'}>价格：</View>
          <View className={'price-item'}>
            <View className={'txt'}>￥</View>
            <Input className={'fill-in'} type={'number'} value={price} onChange={changePrice} />
          </View>
        </View>

        <View className={'default-btn'} onClick={changeGoodsInfoSubmit.bind(null, chooseItem)}>确定</View>
      </View>
    </Popup>
  )
}

export const GoodsPopupContent = memo(goodsPopupContentJsx);
