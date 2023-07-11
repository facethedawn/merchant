import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountForm} from "../components";

const applySettleJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View>
      <AccountForm type={'apply'}/>
    </View>
  )
}

export const ApplySettle = memo(applySettleJsx);
