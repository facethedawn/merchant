import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {AccountFormSubmitBtn} from "../account-form-submit-btn";
import {useLogin} from 'qj-bbc-mobile-store';
import {MobileLoginItems} from "./components";


const formMobileLoginJsx: React.FC = () => {
  const {View} = useComponent();
  const {Form} = antdMobile;
  const {form, onFinish} = useLogin()


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
        <MobileLoginItems form={form} />
      </Form>
    </View>
  )
}

export const FormMobileLogin = memo(formMobileLoginJsx);
