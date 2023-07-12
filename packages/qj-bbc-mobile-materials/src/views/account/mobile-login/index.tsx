import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {AccountTitle, FormMobileLogin} from "../components";
import {useLogin} from 'qj-bbc-mobile-store';

const mobileLoginJsx = () => {
  const {View} = useComponent();
  const {goAccountLogin} = useLogin();

  return (
    <View>
      <AccountTitle title={'验证码登录'}/>
      <FormMobileLogin/>
      <View className='linkWrap'>
        <View className='linkWord' onClick={goAccountLogin}>去账号密码登录</View>
      </View>
    </View>
  )
}

export const MobileLogin = memo(mobileLoginJsx);
