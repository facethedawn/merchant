import {useComponent} from "@brushes/simulate-component";
import {useApplyProgress} from 'qj-bbc-mobile-store';
import dayjs from "dayjs";

export const ApplyProgress = () => {
  const {View} = useComponent();

  const {info, goApply} = useApplyProgress()

  const {userinfoCompname, gmtCreate, dataState, memo} = info;


  return (
    <View className={'apply-progress'}>
      <View className={'apply-progress-item'}>
        <View className={'l-part'}>商家名称：</View>
        <View className={'r-part'}>{userinfoCompname}</View>
      </View>
      <View className={'apply-progress-item'}>
        <View className={'l-part'}>申请时间：</View>
        <View className={'r-part'}>{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</View>
      </View>
      <View className={'apply-progress-item'}>
        <View className={'l-part'}>审核进度：</View>
        <View className={'r-part'}>{(() => {
          switch (dataState) {
            case 0:
              return '待审核'
            case 2:
              return '待审拒绝'
          }
        })()}</View>
      </View>
      {
        dataState === 2 ? <View className={'apply-progress-item'}>
          <View className={'l-part'}>拒绝理由：</View>
          <View className={'r-part'}>{memo}</View>
        </View> : null
      }
      {
        dataState === 2 ? <View className={'btn'} onClick={goApply}>重新审核</View> : null
      }

    </View>
  )
}
