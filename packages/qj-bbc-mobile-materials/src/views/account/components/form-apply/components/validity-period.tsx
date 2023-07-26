import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const validityPeriodJsx: React.FC<any> = ({onChange, start, end}: any) => {
  const {View, Picker} = useComponent();


  return (
    <View>
      <Picker mode='date' onChange={onChange.bind(null, 'start')}>
        {
          start === '' ? '请选择开始时间' : start
        }
      </Picker>
      -
      <Picker mode='date' onChange={onChange.bind(null, 'end')}>
        {
          end === '' ? '请选择结束时间' : end
        }
      </Picker>
    </View>
  )
}


export const ValidityPeriod = memo(validityPeriodJsx);
