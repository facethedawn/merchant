import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAuth} from 'qj-bbc-mobile-store';

const authJsx: React.FC = () => {
  const {View, Button} = useComponent();

  const {getPhone, goReg} = useAuth();

  return (
    <View className={'authWrap'}>
      <View className={'auth'}>
        {/*<Button className={'loginBtn'} open-type='getPhoneNumber' onGetPhoneNumber={getPhone}>登录</Button>*/}
        <Button className={'loginBtn'} onClick={getPhone}>登录</Button>
        <View className={'regBtn'} onClick={goReg}>去注册</View>
      </View>
    </View>
  )
}

export const Auth = memo(authJsx);
