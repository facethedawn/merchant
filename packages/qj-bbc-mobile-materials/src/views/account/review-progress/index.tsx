import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const reviewProgressJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View className={'reviewProgressWrap'}>
      <View className={'reviewProgressItem'}>
        <View className={'lPart'}>商家名称: </View>
        <View className={'rPart'}>测试商家</View>
      </View>
      <View className={'reviewProgressItem'}>
        <View className={'lPart'}>申请时间: </View>
        <View className={'rPart'}>2023-12-12</View>
      </View>
      <View className={'reviewProgressItem'}>
        <View className={'lPart'}>审核进度: </View>
        <View className={'rPart'}>审核中</View>
      </View>
      <View className={'reviewProgressItem'}>
        <View className={'lPart'}>拒绝理由: </View>
        <View className={'rPart'}>审核中</View>
      </View>

      <View className={'btn'}>
        重新审核
      </View>
    </View>
  )
}

export const ReviewProgress = memo(reviewProgressJsx);
