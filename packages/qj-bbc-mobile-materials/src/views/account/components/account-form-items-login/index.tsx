import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {mobileRex, checkPwd } from "../../../../utils";

const accountFormItemsLoginJsx:React.FC = () => {
  const {View} = useComponent();
  const {Form, Input} = antdMobile;

  return (
    <View>
      <View className={'accountFormItem'}>
        <Form.Item
          name={'account'}
          rules={[
            {
              required: true,
              message: `手机号不能为空`
            },
            {
              pattern: mobileRex,
              message: `请输入正确手机号`
            }
          ]}
        >
          <Input
            clearable
            placeholder={'请输入手机号'}
          />
        </Form.Item>
      </View>

      <View className={'accountFormItem'}>
        <Form.Item
          name={'account1'}
          rules={[
            {
              required: true,
              message: `密码不能为空`
            },
            {
              validator: checkPwd
            }
          ]}
        >
          <Input
            clearable
            placeholder={'请输入密码'}
            type='password'
          />
        </Form.Item>
      </View>
    </View>
  )
}

export const AccountFormItemsLogin = memo(accountFormItemsLoginJsx);
