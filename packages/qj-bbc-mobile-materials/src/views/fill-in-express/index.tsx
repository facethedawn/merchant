import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';

const fillInExpressJsx: React.FC= () => {

  const {View, Picker} = useComponent();
  const {Form, Input} = antdMobile;

  return (
    <View className={'fill-in-express'}>
      <Form
        // form={form}
        layout='horizontal'
        footer={
          <View className={'default-btn btn'}>确定</View>
        }
        // onFinish={onFinish}
      >
        <Form.Item
          name={'company'}
          label={'物流公司'}
          rules={[
            {
              required: true,
              message: `物流公司不能为空`
            }
          ]}
        >
          <Picker>
            <View>请选择物流公司</View>
          </Picker>
        </Form.Item>
        <Form.Item
          name={'expressNO'}
          label={'配送单号'}
          rules={[
            {
              required: true,
              message: `配送单号不能为空`
            }
          ]}
        >
          <Input
            clearable
            placeholder={'请输入配送单号'}
            type='password'
          />
        </Form.Item>
      </Form>
    </View>
  )
}

export const FillInExpress = memo(fillInExpressJsx);
