import {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {checkPwd, mobileRex} from "../../../../../utils";

const accountLoginItemsJsx = ({form}: any) => {
  const {View} = useComponent();
  const {Form, Input} = antdMobile;

  return (
    <View>

      {/*手机号*/}
      <View className={'accountFormItem'}>
        <Form.Item
          name={'userPhone'}
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
          name={'pwd'}
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

export const AccountLoginItems = memo(accountLoginItemsJsx);
