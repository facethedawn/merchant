import React, {memo, useContext} from "react";
import {useComponent} from '@brushes/simulate-component';
import {applyContext} from '../../../apply-settle';
import {get} from 'lodash-es';


const pickAreaJsx: React.FC = () => {
  const {View, Picker} = useComponent();

  const {
    areaList,
    onChangeArea,
    areaCoe
  } = useContext(applyContext);

  return (
    <View>
      <Picker mode={'selector'} onChange={onChangeArea} range={areaList} rangeKey={'areaName'}>
        <View>{areaCoe === null ? '请选择企业所在区' : get(areaList[areaCoe], 'areaName')}</View>
      </Picker>
    </View>
  )
}

export const PickArea = memo(pickAreaJsx);
