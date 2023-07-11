import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountForm, AccountTitle} from "../components";

const loginJsx = () => {
  const {View} = useComponent();

  return (
    <View>
      <AccountTitle title={'登录'}/>
      <AccountForm type={'accountLogin'}/>
    </View>
  )
}

export const Login = memo(loginJsx);
