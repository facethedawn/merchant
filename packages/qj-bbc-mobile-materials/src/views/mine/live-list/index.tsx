import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {LiveItem} from "./components";
import {useLiveList} from 'qj-bbc-mobile-store'


const liveListJsx: React.FC = () => {
  const {View, ScrollView} = useComponent();
  const {onScroll, list, goLive} = useLiveList();

  return (
    <View className={'live-list'}>
      <ScrollView
        onScroll = {onScroll}
      >
        {
          list.map((item: any, index: number) => {
            return <LiveItem key={index} item={item} goLive={goLive} />
          })
        }
      </ScrollView>
    </View>
  )
}

export const LiveList = memo(liveListJsx);
