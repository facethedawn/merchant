import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {Search} from "../../common";
import {SideBar, SideContent} from "./components";
import {useCommonSearch, useGoodsList} from 'qj-bbc-mobile-store';

const goodsListJsx: React.FC = () => {
  const {View, WrapLoading} = useComponent();
  const {sysBtnObj} = useCommonSearch()
  const {
    onScroll,
    list,
    all,
    popupShow,
    setPopupShow,
    handlePopupBtn,
    chooseItem,
    setChooseItem,
    loading,
    classifyArr,
    chosenClassifyIndex,
    setChosenClassifyIndex,
    handleUpDown,
    filterPopupShow,
    setFilterPopupShow,
    upDownState,
    setUpDownState,
    resetState,
    filterSubmit
  } = useGoodsList({param: '', refreshNum:1 });

  return (
    <View className={'goods-list'}>
      <Search/>
      <View
        className={'goods-list-content'}
        style={{
          height: `calc(100% - ${sysBtnObj.top}PX - ${sysBtnObj.height}PX - 8px)`
        }}
      >
        <SideBar
          classifyArr={classifyArr}
          chosenClassifyIndex={chosenClassifyIndex}
          setChosenClassifyIndex={setChosenClassifyIndex}
        />
        <WrapLoading loading={loading}>
          <SideContent
            list={list}
            all={all}
            popupShow={popupShow}
            setPopupShow={setPopupShow}
            handlePopupBtn={handlePopupBtn}
            chooseItem={chooseItem}
            setChooseItem={setChooseItem}
            loading={loading}
            handleUpDown={handleUpDown}
            filterPopupShow={filterPopupShow}
            setFilterPopupShow={setFilterPopupShow}
            upDownState={upDownState}
            setUpDownState={setUpDownState}
            resetState={resetState}
            filterSubmit={filterSubmit}
            onScroll={onScroll}
          />
        </WrapLoading>
      </View>
    </View>
  )
}

export const GoodsList = memo(goodsListJsx);
