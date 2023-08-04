import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import dayjs from "dayjs";

const liveItemJsx:React.FC<any> = ({item, goLive}) => {
  const {View, Image} = useComponent();

  const {infuencerName, infuencerInfname, gmtCreate, infuencerStart, infuencerEnd, dataState, infuencerEcode} = item;

  console.log(7, infuencerEcode);

  const handleType = (type: number) => {
    switch (type) {
      case 102:
        return <View className={'red'}>未开始</View>;
      case 107:
        return <View className={'grey'}>已过期</View>
      case 103:
        return <View className={'grey'}>已结束</View>
      case 106:
        return <View className={'blue'}>直播中</View>
      default:
        return ''
    }
  }

  return (
    <View className={'live-list-item'} onClick={goLive.bind(null, infuencerEcode)}>

      <View className={'main-info'}>
        <View className={'l-part'}>
          <Image
            src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/vidicon.png'
            mode='widthFix'
            className='icon'
          />
          <View className={'title'}>{infuencerName}</View>
        </View>
        <View className={'r-part'}>
          {
            handleType(dataState)
          }
        </View>
      </View>

      <View className={'sub-info'}>
        <View className={'sub-info-line'}>直播开始时间：{dayjs(infuencerStart).format('YYYY-MM-DD HH:mm:ss')}</View>
        <View>直播结束时间：{dayjs(infuencerEnd).format('YYYY-MM-DD HH:mm:ss')}</View>
      </View>

      <View className={'sub-info'}>
        <View className={'sub-info-line'}>主播名称：{infuencerInfname}</View>
        <View>创建时间：{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</View>
      </View>
    </View>
  )
}

export const LiveItem = memo(liveItemJsx);
