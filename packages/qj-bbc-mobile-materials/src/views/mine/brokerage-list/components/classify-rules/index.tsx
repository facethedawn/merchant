import {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const classifyRulesJsx: React.FC = () => {
  const {View} = useComponent();

  return (
    <View>分类规则</View>
  )
}

export const ClassifyRules = memo(classifyRulesJsx);
