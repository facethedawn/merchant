import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountTitle, FormAccountLogin} from "../components";
import {useLogin} from "qj-bbc-mobile-store";

const loginJsx = () => {
  const {View} = useComponent();

  const {goMobileLogin, goChangePwd} = useLogin();

  return (
    <View>
      <AccountTitle title={''}/>
      <FormAccountLogin/>
      <View className='linkWrap'>
        <View className='linkWord' onClick={goMobileLogin}>去账号验证码登录</View>
        <View className='linkWord' onClick={goChangePwd}>忘记密码？</View>
      </View>
    </View>
  )
}

export const AccountLogin = memo(loginJsx);
