import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const onScroll = () => {
  console.log('end')
}

const sideBarJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();
  return (
    <View className={'side-bar'}>
      <ScrollView
        onScroll={onScroll}
      >
        <View className={'side-bar-item'}>123</View>
      </ScrollView>
    </View>
  )
}

export const SideBar = memo(sideBarJsx);
