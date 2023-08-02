import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {AccountFormSubmitBtn} from "../account-form-submit-btn";
import {useLogin} from 'qj-bbc-mobile-store';
import {AccountLoginItems} from "./components";

const formAccountLoginJsx:React.FC = () => {
  const {View} = useComponent();
  const {Form} = antdMobile;

  const {form, onFinish} = useLogin();

  return (
    <View className={'accountForm'}>
      <Form
        form={form}
        layout='horizontal'
        footer={
          <AccountFormSubmitBtn/>
        }
        onFinish={onFinish}
      >
        <AccountLoginItems form={form}/>
      </Form>
    </View>
  )
}

export const FormAccountLogin = memo(formAccountLoginJsx);
