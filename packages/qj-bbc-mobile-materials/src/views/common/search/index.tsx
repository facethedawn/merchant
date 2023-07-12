import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useCommonSearch} from 'qj-bbc-mobile-store';

const searchJsx: React.FC = () => {
  const {View, Input, Picker} = useComponent();

  const { changeIndex, config, params} = useCommonSearch()


  return (
    <View className={'search-common-wrap'}>
      <View className={'search-common'}>
        <View className={'search-content'}>
          <View className={'search-filter'}>
            <Picker
              mode='multiSelector'
              range={config}
              rangeKey='label'
              onChange={changeIndex}
            >
              {
                params.label
              }
            </Picker>
          </View>
          <Input
            placeholder={'请输入关键词搜索'}
          />
        </View>
        <View className={'btn'}>
          搜索
        </View>
      </View>
    </View>
  )
}

export const Search = memo(searchJsx);
