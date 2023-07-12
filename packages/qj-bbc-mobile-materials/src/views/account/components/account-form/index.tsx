import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {useAccountForm} from 'qj-bbc-mobile-store';
import {AccountFormItemsLogin} from "../account-form-items-login";
import {AccountFormSubmitBtn} from "../account-form-submit-btn";
import {AccountFormItemsApply} from "../account-form-items-apply";

interface accountFormType {
  type?: string
}

const accountFormJsx: React.FC<accountFormType> = ({type}) => {
  const {View} = useComponent();
  const {Form} = antdMobile;

  const {onFinish} = useAccountForm(type);
  return (
    <View className={'accountForm'}>
      <Form
        layout='horizontal'
        footer={
          <AccountFormSubmitBtn/>
        }
        onFinish={onFinish}
      >
        {
          type === 'accountLogin' ? <AccountFormItemsLogin/> : null
        }
        {
          type === 'apply' ? <AccountFormItemsApply/> : null
        }
      </Form>
    </View>
  )
}

export const AccountForm = memo(accountFormJsx);
