import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAccountForm} from '../../../../../../../qj-bbc-mobile-store';

const validityPeriodJsx: React.FC = () => {
  const {View, Picker} = useComponent();
  const {startTime, selectStart, endTime, selectEnd} = useAccountForm();


  return (
    <View>
      <Picker mode='date' onChange={selectStart}>
        {
          startTime.label === '' ? '请选择开始时间' : startTime.label
        }
      </Picker>
      -
      <Picker mode='date' onChange={selectEnd}>
        {
          endTime.label === '' ? '请选择结束时间' : endTime.label
        }
      </Picker>
    </View>
  )
}


export const ValidityPeriod = memo(validityPeriodJsx);
