import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";


const changePwdJsx:React.FC = () => {
  const {View} = useComponent();

  return (
    <View>修改密码</View>
  )
}

export const ChangePwd = memo(changePwdJsx);
