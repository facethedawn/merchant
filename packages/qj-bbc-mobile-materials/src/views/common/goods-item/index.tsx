import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {getHost} from "qj-bbc-mobile-store";



const goodsItemJsx: React.FC<any> = ({item, handlePopupBtn, handleUpDown}) => {
  const {View, Image} = useComponent();

  const {goodsName, dataPic, goodsShowno, goodsNum, pricesetNprice, skuName, dataState, skuId} = item;


  return (
    <View className='goods-item'>
      <View className={'goods-info-wrap'}>
        <View className={'l-part'}>
          <Image
            src={`${getHost()}${dataPic}`}
            mode='widthFix'
            className='img'
          />
        </View>
        <View className={'r-part'}>
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
              编号：{goodsShowno}
            </View>
            <View className={'sizeItem'}>
              规格：{skuName}
            </View>
            <View className={'sizeItem'}>
              <View className={'lPart'}>库存：{goodsNum}</View>
              <View className={'rPart'}>￥{pricesetNprice}</View>
            </View>
          </View>
        </View>
      </View>

      <View className='handle-bar'>
        <View className={'setGoodsInfo default-btn'} onClick={handleUpDown.bind(null, skuId, dataState)}>{dataState === 0 ? '上架': '下架'}</View>
        <View className={'upDown default-btn'} onClick={handlePopupBtn.bind(null, item, dataState )}>设置库存/价格</View>
      </View>

    </View>
  )
}

export const GoodsItem = memo(goodsItemJsx);
