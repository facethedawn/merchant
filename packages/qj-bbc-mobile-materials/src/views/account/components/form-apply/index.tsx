import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {AccountFormSubmitBtn} from "../account-form-submit-btn";
import {useApply} from 'qj-bbc-mobile-store';
import {AccountFormItemsApply} from "./components";

interface formRegJsxType {
  lockForm: string
}

const formApplyJsx: React.FC<formRegJsxType> = ({lockForm}) => {
  const {View} = useComponent();
  const {Form} = antdMobile;
  const {form, onFinish} = useApply({lockForm})

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
        <AccountFormItemsApply form={form} />
      </Form>
    </View>
  )
}

export const FormApply = memo(formApplyJsx);
