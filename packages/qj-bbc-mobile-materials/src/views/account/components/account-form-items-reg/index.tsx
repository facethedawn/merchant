import {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {mobileRex, checkPwd } from "../../../../utils";

const accountFormItemsRegJsx = () => {
  const {View} = useComponent();
  const {Form, Input} = antdMobile;

  return (
    <View>

      {/*手机号*/}
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


      {/*密码*/}
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

      {/*再次输入密码*/}
      <View className={'accountFormItem'}>
        <Form.Item
          name={'account12'}
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

export const AccountFormItemsReg = memo(accountFormItemsRegJsx);
