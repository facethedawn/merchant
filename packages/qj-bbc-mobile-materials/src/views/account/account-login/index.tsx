import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountTitle, FormAccountLogin} from "../components";
import {useLogin} from "qj-bbc-mobile-store";

const loginJsx = () => {
  const {View} = useComponent();

  const {goMobileLogin} = useLogin();

  return (
    <View>
      <AccountTitle title={''}/>
      <FormAccountLogin/>
      <View className='linkWrap'>
        <View className='linkWord' onClick={goMobileLogin}>去账号密码登录</View>
      </View>
    </View>
  )
}

export const AccountLogin = memo(loginJsx);
