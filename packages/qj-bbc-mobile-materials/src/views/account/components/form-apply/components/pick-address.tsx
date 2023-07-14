import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAccountForm} from '../../../../../../../qj-bbc-mobile-store';

const pickAddressJsx: React.FC = () => {
  const {View, Picker} = useComponent();
  const {changeAddress, address} = useAccountForm();

  return (
    <View>
      <Picker mode={'region'} onChange={changeAddress}>
        <View>{address === ''? '请选择企业所在地': address}</View>
      </Picker>
    </View>
  )
}

export const PickAddress = memo(pickAddressJsx);
