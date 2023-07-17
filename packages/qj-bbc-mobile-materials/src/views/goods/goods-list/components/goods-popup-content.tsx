import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {getHost} from "../../../../utils";


const goodsPopupContentJsx:React.FC<any> = ({popupShow, setPopupShow, chooseItem}) => {

  const {View, Popup, Image, Input} = useComponent();
  const {goodsName, dataPic, goodsShowno, goodsNum, pricesetNprice, skuName} = chooseItem



  return (
    <Popup popupVisible={popupShow} popupHandler={() => {setPopupShow(false)}}>
      <View className={'goods-list-popup'}>

        <View className={'goods-list-popup-item'}>
          <Image
            src={`${getHost()}${dataPic}`}
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
            <View className={'btn'}>归零</View>
            <View className={'inventory'}><Input className={'fill-in'} type={'number'} value={goodsNum} /></View>
            <View className={'btn'}>9999</View>
          </View>
        </View>

        <View className={'goods-list-popup-list-item'}>
          <View className={'l-part'}>价格：</View>
          <View className={'price-item'}>
            <View className={'txt'}>￥</View>
            <Input className={'fill-in'} value={pricesetNprice} />
          </View>
        </View>

        <View className={'default-btn'}>确定</View>
      </View>
    </Popup>
  )
}

export const GoodsPopupContent = memo(goodsPopupContentJsx);
