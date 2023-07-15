import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";


const liveListJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View>直播列表</View>
  )
}

export const LiveList = memo(liveListJsx);
