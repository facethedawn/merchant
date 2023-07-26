import React, {memo, useContext} from "react";
import {useComponent} from '@brushes/simulate-component';
import {applyContext} from "../../../apply-settle";


const pickBrandJsx: React.FC<any> = (
  {
    state,
    arr = [],
    setState,
    onChange,
    showArr
  }) => {

  const {View, Popup, CheckboxGroup, Checkbox} = useComponent();
  const {

  } = useContext(applyContext);

  return (
    <View>
      <View onClick={() => setState(true)}>{
        showArr.length === 0 ? '请选择项目' :
          showArr.map((coe: any) => {
            return arr[+coe]['name'];
          }).join(', ')
      }</View>
      <Popup popupVisible={state} popupHandler={() => setState(false)}>
        <CheckboxGroup onChange={onChange} className={'popBox'}>
          {
            arr.map((item: any, index: number) => {
              return (
                <Checkbox className={'popBox-item'} key={index} value={item.value} checked={!!showArr.includes(item.value)}>
                  {item.name}
                </Checkbox>
              )
            })
          }
        </CheckboxGroup>
      </Popup>
    </View>
  )
}

export const PickBrand = memo(pickBrandJsx);
