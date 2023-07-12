import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {AccountFormSubmitBtn} from "../account-form-submit-btn";
import {RegItems} from "./components";
import {useRegForm} from 'qj-bbc-mobile-store';

interface formRegJsxType {
  lockForm: string
}

const formRegJsx: React.FC<formRegJsxType> = ({lockForm}) => {
  const {View} = useComponent();
  const {Form} = antdMobile;
  const {form, onFinish} = useRegForm({lockForm})


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
        <RegItems form={form} />
      </Form>
    </View>
  )
}

export const FormReg = memo(formRegJsx);
