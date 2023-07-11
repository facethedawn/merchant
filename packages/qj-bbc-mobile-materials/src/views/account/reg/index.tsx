import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountAgreement, AccountForm, AccountTitle} from "../components";
import {config} from './config';


const regJsx = () => {
  const {View} = useComponent();
  return (
    <View>
      <AccountTitle title={'注册'}/>
      <AccountForm type={'reg'}/>
      <AccountAgreement config={config}/>
    </View>
  )
}

export const Reg = memo(regJsx);
