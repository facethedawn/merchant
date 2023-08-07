import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAgreement} from 'qj-bbc-mobile-store';

interface configItem {
  label: string,
  params: any
}

interface accountAgreementType {
  config: configItem[],
  changeLockForm: any,
  lockForm: any
}

const accountAgreementJsx: React.FC<accountAgreementType> = ({config,changeLockForm, lockForm}) => {
  const {View, Checkbox, CheckboxGroup} = useComponent();
  const {goAgreement} = useAgreement();


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
                onClick={goAgreement.bind(null, item.params)}>《{item.label}》</View>{index === config.length - 1 ? '' : '和'}
            </View>
          )
        })
      }
    </View>
  )
}

export const AccountAgreement = memo(accountAgreementJsx);
