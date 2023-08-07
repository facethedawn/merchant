import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useAgreement} from "qj-bbc-mobile-store";

interface agreementType {
  params: any
}

const agreementJsx:React.FC<agreementType> = ({params}) => {
  const {type} = params;
  const {View} = useComponent();
  const {data} = useAgreement({page: true, proappConfigType: type})

  console.log(5, params);

  return (
    <View className={'agreement-page-wrap'} >
      <View dangerouslySetInnerHTML={{ __html: data }}></View>
    </View>
  )
}

export const Agreement = memo(agreementJsx);
