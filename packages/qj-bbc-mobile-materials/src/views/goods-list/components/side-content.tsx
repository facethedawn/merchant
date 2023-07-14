import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {GoodsItem} from "../../common";


const sideContentJsx: React.FC<any> = ({list, all}) => {

  const {View, ScrollView, Image} = useComponent();
  return (
    <View className={'side-content'}>
      <View className={'dashboard'}>
        <View className={'allGoods'}>全部商品 {all.current} 个</View>
        <View className={'filter'}>
          <Image
            src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/filter.png'
            mode='widthFix'
            className='icon'
          />
          筛选
        </View>
      </View>
      <View className={'goods-wrap'}>
        <ScrollView
        >
          <View className={'goods-item-wrap'}>
            {
              list.map((item: any, index: number) => {
                return <GoodsItem key={index} item={item}/>
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export const SideContent = memo(sideContentJsx);
