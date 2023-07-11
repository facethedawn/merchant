import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

interface agreementType {
  params: any
}

const agreementJsx:React.FC<agreementType> = ({params}) => {
  const {View} = useComponent();

  console.log(5, params);

  return (
    // <View className={'agreementWrap'} dangerouslySetInnerHTML={{__html: agreementData}}>
   <View>agreement
    </View>
  )
}

export const Agreement = memo(agreementJsx);
