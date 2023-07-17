import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const config = [
  {
    label: '上架',
    value: 1,
  },
  {
    label: '下架',
    value: 0
  }
]

const goodsPopupFilterJsx:React.FC<any> = (
  {
    filterPopupShow,
    setFilterPopupShow,
    upDownState,
    setUpDownState,
    resetState,
    filterSubmit
  }) => {
  const {View, Popup} = useComponent();


  return (
    <Popup popupVisible={filterPopupShow} popupHandler={() => setFilterPopupShow(false)}>
      <View className={'filter-content-popup'}>
        <View className={'filter-content-list-item'}>
          <View className={'l-part'}>上下架：</View>
          <View className={'r-part'}>
            {/*<View className={'btn active'}>上架</View>*/}
            {/*<View className={'btn'}>下架</View>*/}
            {
              config.map((item, index) =>
                <View
                  className={`btn ${item.value === upDownState ? 'active': ''}`}
                  onClick={() => setUpDownState(item.value)}
                >
                  {item.label}
                </View>)
            }
          </View>
        </View>
        <View className={'filter-content-list-item submit'}>
          <View className={'reset btn-submit'} onClick={resetState}>重置</View>
          <View className={'submit btn-submit'} onClick={filterSubmit}>确定</View>
        </View>
      </View>
    </Popup>
  )
}

export const GoodsPopupFilter = memo(goodsPopupFilterJsx);
