import React, {memo} from "react";
import {useComponent, antdMobile} from "@brushes/simulate-component";
import {useChangePwd} from "qj-bbc-mobile-store";
import {SubmitBtn, ChangePwdForm} from './components';
import {AccountTitle} from '../components'


const changePwdJsx:React.FC = () => {
  const {View} = useComponent();
  const {Form} = antdMobile;

  const {form, onFinish} = useChangePwd()

  return (
    <View className={'change-pwd accountForm'}>
      <AccountTitle title={''}/>
      <Form
        form={form}
        layout='horizontal'
        footer={
          <SubmitBtn/>
        }
        onFinish={onFinish}
      >
        <ChangePwdForm form={form} />
      </Form>
    </View>
  )
}

export const ChangePwd = memo(changePwdJsx);
