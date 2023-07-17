import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const onScroll = () => {
  console.log('end')
}

const sideBarJsx: React.FC<any> = ({classifyArr, chosenClassifyIndex, setChosenClassifyIndex}) => {
  const {View, ScrollView} = useComponent();

  return (
    <View className={'side-bar-wrap'}>
      <View className={'side-bar'}>
        <ScrollView
          onScroll={onScroll}
        >
          {
            classifyArr.map((item: any, index: number) => {
              return (
                <View
                  className={`side-bar-item ${chosenClassifyIndex === index ? 'highlight' : ''}`}
                  key={index}
                  onClick={setChosenClassifyIndex.bind(null, index)}
                >
                  <View className={'text'}>{item.classtreeName}</View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export const SideBar = memo(sideBarJsx);
