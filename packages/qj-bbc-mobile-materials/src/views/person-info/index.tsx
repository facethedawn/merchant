import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const personInfoJsx:React.FC = () => {
  const {View} = useComponent();

  return (
    <View>个人信息</View>
  )
}

export const PersonInfo = memo(personInfoJsx);
