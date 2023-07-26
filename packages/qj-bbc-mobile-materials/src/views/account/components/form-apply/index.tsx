import React, {memo, useContext} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {AccountFormSubmitBtn} from "../account-form-submit-btn";
import {AccountFormItemsApply} from "./components";
import {applyContext} from '../../apply-settle';

const formApplyJsx: React.FC<any> = () => {
  const {View} = useComponent();
  const {Form} = antdMobile;
  const {form, onFinish} = useContext(applyContext);

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
        <AccountFormItemsApply />
      </Form>
    </View>
  )
}

export const FormApply = memo(formApplyJsx);
