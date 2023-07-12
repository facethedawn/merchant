import {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {mobileRex } from "../../../../../utils";
import {CodeItem} from "../../code-item/codeItem";

const mobileLoginItemsJsx = ({form}: any) => {
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

      <View className={'accountFormItem'}>
        <CodeItem form={form} type={'mobileLogin'}/>
      </View>
    </View>
  )
}

export const MobileLoginItems = memo(mobileLoginItemsJsx);
