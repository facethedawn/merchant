import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

interface accountTitleType {
  title: string
}

const accountTitleJsx:React.FC<accountTitleType> = ({title}) => {
  const {View} = useComponent();

  return (
    <View className={'accountTitle'}>
      {title}
    </View>
  )
}

export const AccountTitle = memo(accountTitleJsx);
