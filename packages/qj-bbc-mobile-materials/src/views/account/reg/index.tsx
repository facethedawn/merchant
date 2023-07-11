import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountForm, AccountTitle} from "../components";

const regJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View>
      <AccountTitle title={'注册'}/>
      <AccountForm type={'reg'}/>
    </View>
  )
}

export const Reg = memo(regJsx);
