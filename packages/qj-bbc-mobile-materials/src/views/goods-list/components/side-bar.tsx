import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const onScroll = () => {
  console.log('end')
}

const sideBarJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();
  return (
    <View className={'side-bar-wrap'}>
      <View className={'side-bar'}>
        <ScrollView
          onScroll={onScroll}
        >
          <View className={'side-bar-item highlight'}>
            <View className={'text'}>时尚男装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
          <View className={'side-bar-item'}>
            <View className={'text'}>流行女装</View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export const SideBar = memo(sideBarJsx);
