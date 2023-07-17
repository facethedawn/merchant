import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {GoodsItem} from "../../../common";
import {GoodsPopupContent} from "./goods-popup-content";
import {GoodsPopupFilter} from "./goods-popup-filter";


const sideContentJsx: React.FC<any> = (
  {
    list,
    all,
    popupShow,
    setPopupShow,
    chooseItem,
    setChooseItem,
    handlePopupBtn,
    handleUpDown,
    filterPopupShow,
    setFilterPopupShow,
    upDownState,
    setUpDownState,
    resetState,
    filterSubmit,
    onScroll
  }) => {

  const {View, ScrollView, Image} = useComponent();
  return (
    <View className={'side-content'}>
      <View className={'dashboard'}>
        <View className={'allGoods'}>全部商品 {all.current} 个 {filterPopupShow+ ''}</View>
        <View className={'filter'} onClick={() => setFilterPopupShow(true)}>
          <Image
            src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/filter.png'
            mode='widthFix'
            className='icon'
          />
          筛选
        </View>
      </View>
      <View className={'goods-wrap'}>
        <ScrollView
          onScroll={onScroll}
        >
          <View className={'goods-item-wrap'}>
            {
              list.map((item: any, index: number) => {
                return <GoodsItem key={index} item={item} setPopupShow={setPopupShow} setChooseItem={setChooseItem} handlePopupBtn={handlePopupBtn} handleUpDown={handleUpDown} />
              })
            }
          </View>
        </ScrollView>
      </View>
      <GoodsPopupContent popupShow={popupShow} setPopupShow={setPopupShow} chooseItem={chooseItem} />
      <GoodsPopupFilter
        filterPopupShow={filterPopupShow}
        setFilterPopupShow={setFilterPopupShow}
        upDownState={upDownState}
        setUpDownState={setUpDownState}
        resetState={resetState}
        filterSubmit={filterSubmit}
      />
    </View>
  )
}

export const SideContent = memo(sideContentJsx);
