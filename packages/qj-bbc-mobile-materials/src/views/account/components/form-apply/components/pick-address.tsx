import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAccountForm} from '../../../../../../../qj-bbc-mobile-store';

const pickAddressJsx: React.FC<any> = ({onChange, coe, list, rangeKey}) => {
  const {View, Picker} = useComponent();
  const {address} = useAccountForm();

  console.log(9, coe, list,)

  return (
    <View>
      <Picker mode={'selector'} onChange={onChange} range={list} rangeKey={rangeKey}>
        <View>{address === '' ? '请选择企业所在地' : address}</View>
      </Picker>
    </View>
  )
}

export const PickAddress = memo(pickAddressJsx);
