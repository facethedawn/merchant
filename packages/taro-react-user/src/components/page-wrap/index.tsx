import React, {memo, useEffect, useState} from "react";
import {View, ScrollView} from '@tarojs/components';
import Taro from "@tarojs/taro";

interface pageWrapType {
  children: React.ReactNode,
  sub?: boolean
}

const pageWrapJsx: React.FC<pageWrapType> = ({children, sub = false}) => {
  const [safe, setSafe] = useState(0);
  const [tabBarHeight, setTabBarHeight] = useState(0);

  useEffect(() => {
    const safeVal = Taro.getStorageSync('safeArea');
    const tabBarHeight = Taro.getStorageSync('tabBarHeight');
    setSafe(safeVal);
    setTabBarHeight(tabBarHeight)
  })

  return (
    <View>
      <ScrollView
        scrollY
        style={{
          height: !sub? `calc(100vh - ${safe}px)`: `calc(100vh - ${safe}px - ${tabBarHeight}px)`
        }}
        enhanced={true}
        showScrollbar={false}
      >
        {children}
      </ScrollView>
    </View>
  )
}

export const PageWrap = memo(pageWrapJsx);
