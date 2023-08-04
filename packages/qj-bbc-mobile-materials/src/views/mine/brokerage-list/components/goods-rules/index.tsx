import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {useGoodsRules} from "qj-bbc-mobile-store";
import {getHost} from "qj-bbc-mobile-store";

const goodsRulesJsx: React.FC = () => {
  const {View, ScrollView, Image} = useComponent();

  const {onScroll, list} = useGoodsRules();

  console.log(10,list)

  const handleUrl = (url: string) => {
    if(url.indexOf('http')>=0) {
      return url
    }
    return `${getHost()}${url}`
  }

  return (
    <View className={'goods-rules'}>
      <ScrollView
        onScroll={onScroll}
      >
        {
          list.map((item, index) => {
            const {dpriceConfPicurl, dpriceConfValuename, dpriceConfValue, dpriceConfPrice, dataState} = item
            return <View className={'goods-rules-item'} key={index}>
              <Image
                src= {handleUrl(dpriceConfPicurl)}
                mode='widthFix'
                className='img'
              />
              <View className={'goods-info'}>
                <View className={'title'}>{dpriceConfValuename}</View>
                <View className={'rules-info'}>
                  <View>商品ID: {dpriceConfValue}</View>
                  <View>结算比例: {dpriceConfPrice} {dataState === 0 ? '元' : '%'}</View>
                </View>
              </View>
            </View>
          })
        }

      </ScrollView>
    </View>
  )
}

export const GoodsRules = memo(goodsRulesJsx);
