import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountAgreement, AccountTitle, FormReg} from "../components";
import {config} from './config';
import {useAccountForm} from 'qj-bbc-mobile-store';


const regJsx = () => {
  const {View} = useComponent();
  const {changeLockForm, lockForm} = useAccountForm();
  return (
    <View>
      <AccountTitle title={'注册'}/>
      <FormReg lockForm={lockForm} />
      <AccountAgreement config={config} changeLockForm={changeLockForm} lockForm={lockForm}/>
    </View>
  )
}

export const Reg = memo(regJsx);
