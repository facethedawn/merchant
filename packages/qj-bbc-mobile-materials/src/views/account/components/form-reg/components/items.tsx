import {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {mobileRex, checkPwd } from "../../../../../utils";
import {CodeItem} from "./codeItem";

const regItemsJsx = ({form}: any) => {
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
          name={'userPwsswd'}
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
          name={'userPwsswdAgin'}
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

      <View className={'accountFormItem'}>
        <CodeItem form={form} type={'reg'}/>
      </View>
    </View>
  )
}

export const RegItems = memo(regItemsJsx);
