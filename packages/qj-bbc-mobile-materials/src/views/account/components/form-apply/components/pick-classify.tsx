import React, {memo, useContext} from "react";
import {useComponent} from '@brushes/simulate-component';
import {applyContext} from "../../../apply-settle";


const pickClassifyJsx: React.FC<any> = ({arr = [], showPopup, onChange, showArr}) => {
  const {View, Popup, CheckboxGroup, Checkbox} = useComponent();
  const {
    popupShow,
    setPopupShow,
  } = useContext(applyContext);

  return (
    <View>
      <View onClick={() => showPopup()}>{
        showArr.length === 0 ? '请选择' :
          showArr.map((coe: any) => {
            return arr[+coe]['name'];
          }).toString()
      }</View>
      <Popup popupVisible={popupShow} popupHandler={() => setPopupShow(false)}>
        <CheckboxGroup onChange={onChange}>
          {
            arr.map((item: any, index: number) => {
              return (
                <Checkbox key={index} value={item.value} checked={!!showArr.includes(item.value)}>
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

export const PickClassify = memo(pickClassifyJsx);
