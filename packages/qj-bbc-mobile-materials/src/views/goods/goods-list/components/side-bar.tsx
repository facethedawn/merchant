import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {ScrollView} from '@tarojs/components';

const sideBarJsx: React.FC<any> = ({classifyArr, chosenClassifyIndex, setChosenClassifyIndex}) => {
  const {View} = useComponent();

  return (
    <View className={'side-bar-wrap'}>
      <View className={'side-bar'}>
        <ScrollView
          scrollY
          style={{height: '100%'}}
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
