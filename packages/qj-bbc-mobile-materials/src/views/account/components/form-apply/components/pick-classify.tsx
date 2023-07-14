import {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useApplyForm} from '../../../../../../../qj-bbc-mobile-store';

const pickClassifyJsx = () => {
  const {View, Popup, CheckboxGroup, Checkbox} = useComponent();
  const {classifyList} = useApplyForm();
  return (
    <View>
      <View>123</View>
      <Popup popupVisible={false} popupHandler={() => {}} >
        <CheckboxGroup>
          {
            classifyList.map((item: any, index: number) => {
              return (
                <Checkbox>
                  {item}
                </Checkbox>
              )
            })
          }
        </CheckboxGroup>
      </Popup>
    </View>
  )
}

export const PickClassify = memo(pickClassifyJsx);
