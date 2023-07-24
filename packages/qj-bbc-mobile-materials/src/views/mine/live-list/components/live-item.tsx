import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const liveItemJsx:React.FC<any> = ({item}) => {
  const {View, Image} = useComponent();

  const handleType = (type: number) => {
    switch (type) {
      case 1:
        return <View className={'red'}>未开始</View>;
      case 2:
        return <View className={'grey'}>已过期</View>
      case 3:
        return <View className={'blue'}>直播中</View>
      default:
        return ''
    }
  }

  return (
    <View className={'live-list-item'}>

      <View className={'main-info'}>
        <View className={'l-part'}>
          <Image
            src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/vidicon.png'
            mode='widthFix'
            className='icon'
          />
          <View className={'title'}>2023直播间</View>
        </View>
        <View className={'r-part'}>
          {
            handleType(1)
          }
        </View>
      </View>

      <View className={'sub-info'}>
        <View className={'sub-info-line'}>直播开始时间：123123213</View>
        <View>直播结束时间：123123213</View>
      </View>

      <View className={'sub-info'}>
        <View className={'sub-info-line'}>主播名称：123123213</View>
        <View>创建时间：123123213</View>
      </View>
    </View>
  )
}

export const LiveItem = memo(liveItemJsx);
