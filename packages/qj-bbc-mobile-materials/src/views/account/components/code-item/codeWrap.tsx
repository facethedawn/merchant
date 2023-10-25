import React, {memo} from "react";
import {View} from '@tarojs/components';
import {useCode} from '../../../../../../qj-bbc-mobile-store';

interface codeWrapType  {
  form: any
  type: string
}

const CodeWrapJsx: React.FC<codeWrapType> = ({form, type}) => {


  const {timeFlag, time, getMobile} = useCode({form, type})


  return (
    <View>
      {
        timeFlag ? <View>倒计时 {time} 秒</View> : <View onClick={getMobile} className={'code-item'}>获取验证码</View>
      }
    </View>
  )
}

export const CodeWrap = memo(CodeWrapJsx);
