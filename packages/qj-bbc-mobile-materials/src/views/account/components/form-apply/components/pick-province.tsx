import React, {memo, useContext} from "react";
import {useComponent} from '@brushes/simulate-component';
import {applyContext} from '../../../apply-settle';
import {get} from 'lodash-es';


const pickProvinceJsx: React.FC = () => {
  const {View, Picker} = useComponent();

  const {
    onChangeProvince,
    provinceCoe,
    provinceList,
  } = useContext(applyContext);

  return (
    <View>
      <Picker mode={'selector'} onChange={onChangeProvince} range={provinceList} rangeKey={'provincName'}>
        <View>{provinceCoe === null ? '请选择企业所在省' : get(provinceList[provinceCoe], 'provincName')}</View>
      </Picker>
    </View>
  )
}

export const PickProvince = memo(pickProvinceJsx);
