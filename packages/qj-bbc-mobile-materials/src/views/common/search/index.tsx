import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useCommonSearch} from 'qj-bbc-mobile-store';
import {Picker, Image} from '@tarojs/components';

const searchJsx: React.FC<any> = ({config, value = 0, changeSearchType, onFinish, onChange}) => {
  const {View, Input} = useComponent();

  const { sysBtnObj} = useCommonSearch()

  return (
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
            value={value}
            rangeKey='label'
            onChange={changeSearchType}
          >
            <View className={'typeWrap'}>
              <View className={'type'}>{config[0][value]['label']}</View>
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
          onChange={onChange}
        />
      </View>
      <View className={'btn'} onClick={onFinish}>
        <Image
          src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/search.png'
          mode='widthFix'
          className='icon'
        />
      </View>
    </View>
  )
}

export const Search = memo(searchJsx);
