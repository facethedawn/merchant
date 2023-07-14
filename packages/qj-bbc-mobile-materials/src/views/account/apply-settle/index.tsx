import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountTitle, FormApply} from "../components";
import {useAccountForm} from 'qj-bbc-mobile-store';

const applySettleJsx: React.FC = () => {
  const {View} = useComponent();
  const {lockForm} = useAccountForm();

  return (
    <View>
      <AccountTitle title={'申请入驻'}/>
      <FormApply lockForm={lockForm} />
    </View>
  )
}

export const ApplySettle = memo(applySettleJsx);
