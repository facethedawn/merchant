import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useCommonSearch} from 'qj-bbc-mobile-store';

interface SearchTopWrapType {
  children?: React.ReactNode;
}

const searchTopWrapJsx:React.FC<SearchTopWrapType> = ({children}) => {
  const {View} = useComponent();
  const { sysBtnObj} = useCommonSearch()

  return (
    <View className={'search-common-wrap'}>
      <View
        style={{
          width: `${sysBtnObj.left}PX`,
          padding: `${sysBtnObj.top}PX calc(100% - ${sysBtnObj.right}PX) 0`,
          boxSizing: 'border-box'
        }}
      >
        {children}
      </View>
    </View>
  )
}

export const SearchTopWrap = memo(searchTopWrapJsx);
