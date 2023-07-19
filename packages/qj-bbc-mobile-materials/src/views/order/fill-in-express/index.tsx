import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {Picker} from '@tarojs/components';
import {useFillInExpress} from "qj-bbc-mobile-store";


const fillInExpressJsx: React.FC<any> = ({params}) => {
  const {form, expressList, expressIndex, changeExpressIndex, onFinish} = useFillInExpress({params});

  const {View} = useComponent();
  const {Form, Input, Button} = antdMobile;

  return (
    <View className={'fill-in-express'}>
      <Form
        form={form}
        layout='horizontal'
        footer={
          <Button block className={'btn'} type='submit'>确定</Button>
        }
        onFinish={onFinish}
      >
        <Form.Item
          label={'物流公司'}
        >
          <Picker range={expressList} rangeKey={'expressName'} onChange={changeExpressIndex}>
            <View>{expressList[expressIndex] ? expressList[expressIndex]['expressName'] : ''}</View>
          </Picker>
        </Form.Item>
        <Form.Item
          name={'packageBillno'}
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
            type='text'
          />
        </Form.Item>
      </Form>
    </View>
  )
}

export const FillInExpress = memo(fillInExpressJsx);
