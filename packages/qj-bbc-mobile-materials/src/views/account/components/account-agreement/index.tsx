import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAccountForm, useAgreement} from 'qj-bbc-mobile-store';

interface configItem {
  label: string,
  params: string
}

interface accountAgreementType {
  config: configItem[]
}

const accountAgreementJsx: React.FC<accountAgreementType> = ({config}) => {
  const {View, Checkbox, CheckboxGroup} = useComponent();
  const {goAgreement} = useAgreement();
  const {changeLockForm, lockForm} = useAccountForm();


  return (
    <View className={'agreementWrap'}>
      <CheckboxGroup onChange={changeLockForm}>
        <Checkbox value={lockForm} className={'choose'}/>我已阅读并同意
      </CheckboxGroup>
      {
        config.map((item: configItem, index: number) => {
          return (
            <View key={index}>
              <View
                className={'agreement'}
                onClick={goAgreement}>《{item.label}》</View>{index === config.length - 1 ? '' : '和'}
            </View>
          )
        })
      }
    </View>
  )
}

export const AccountAgreement = memo(accountAgreementJsx);
