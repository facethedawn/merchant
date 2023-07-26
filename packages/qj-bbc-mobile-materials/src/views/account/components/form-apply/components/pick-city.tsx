import React, {memo, useContext} from "react";
import {useComponent} from '@brushes/simulate-component';
import {applyContext} from '../../../apply-settle';
import {get} from 'lodash-es';


const pickCityJsx: React.FC = () => {
  const {View, Picker} = useComponent();

  const {
    cityList,
    onChangeCity,
    cityCoe
  } = useContext(applyContext);

  return (
    <View>
      <Picker mode={'selector'} onChange={onChangeCity} range={cityList} rangeKey={'areaName'}>
        <View>{cityCoe === null ? '请选择企业所在市' : get(cityList[cityCoe], 'areaName')}</View>
      </Picker>
    </View>
  )
}

export const PickCity = memo(pickCityJsx);
