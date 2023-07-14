import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {getHost} from "../../../utils";



const goodsItemJsx: React.FC<any> = ({item}) => {
  const {View, Image} = useComponent();

  const {goodsName, dataPic, goodsShowno, goodsNum, pricesetNprice} = item;


  return (
    <View className='goods-item'>
      <View className={'goods-info-wrap'}>
        <View className={'lPart'}>
          <Image
            src={`${getHost()}${dataPic}`}
            mode='widthFix'
            className='img'
          />
        </View>
        <View className={'rPart'}>
          <View className={'title'}>
            <View className={'text'}>{goodsName}</View>
            <Image
              src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/share.png'
              mode='widthFix'
              className='icon'
            />
          </View>
          <View className={'sizeWrap'}>
            <View className={'sizeItem'}>
              商品编号：{goodsShowno}
            </View>
            <View className={'sizeItem'}>
              规格：s/绿色
            </View>
            <View className={'sizeItem'}>
              <View className={'lPart'}>库存：{goodsNum}</View>
              <View className={'rPart'}>￥{pricesetNprice}</View>
            </View>
          </View>
        </View>
      </View>

      <View className='handle-bar'>
        <View className={'setGoodsInfo default-btn'}>上架</View>
        <View className={'upDown default-btn'}>设置库存/价格</View>
      </View>
    </View>
  )
}

export const GoodsItem = memo(goodsItemJsx);
