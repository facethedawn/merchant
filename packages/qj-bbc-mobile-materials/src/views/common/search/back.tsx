import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useCommonSearch} from 'qj-bbc-mobile-store';
import {Picker, Image} from '@tarojs/components';

const searchJsx: React.FC = () => {
  const {View, Input} = useComponent();

  const { sysBtnObj, changeIndex, config, params, handleSearch} = useCommonSearch()

  return (
    <View
      className={'search-common-wrap'}
    >
      <View
        style={{
          width: `${sysBtnObj.left}PX`,
          padding: `${sysBtnObj.top}PX calc(100% - ${sysBtnObj.right}PX) 0`,
          boxSizing: 'border-box'
        }}
      >
        <View
          className={'search-common'}
          style={{
            height: `${sysBtnObj.height}PX`
          }}
        >
          <View className={'search-content'}>
            <View className={'search-filter'}>
              <Picker
                mode='multiSelector'
                range={config}
                rangeKey='label'
                onChange={changeIndex}
              >
                <View className={'typeWrap'}>
                  <View className={'type'}>{params.label}</View>
                  <Image
                    src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/arrow-down.png'
                    mode='widthFix'
                    className='icon'
                  />
                </View>
              </Picker>
            </View>
            <Input
              placeholder={'请输入关键词搜索'}
              className={'fillIn'}
            />
          </View>
          <View className={'btn'} onClick={handleSearch}>
            <Image
              src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/search.png'
              mode='widthFix'
              className='icon'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export const Search = memo(searchJsx);
