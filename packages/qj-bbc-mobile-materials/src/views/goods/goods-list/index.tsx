import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {Search, SearchTopWrap} from "../../common";
import {SideBar, SideContent, config} from "./components";
import {useCommonSearch, useGoodsList} from 'qj-bbc-mobile-store';

const goodsListJsx: React.FC = () => {
  const {View} = useComponent();
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
    filterSubmit,
    setInventoryMin,
    inventory,
    setInventoryMax,
    changeGoodsInfoSubmit,
    changeInventory,
    changeSearchType,
    chooseSearchTypeIndex,
    goGoodsSearch,
    handleChangeSearchContent,
    price,
    changePrice
  } = useGoodsList({param: '', refreshNum:1, config });

  return (
    <View className={'goods-list'} id={'a'}>
      <SearchTopWrap>
        <Search config={config} changeSearchType={changeSearchType} value={chooseSearchTypeIndex} onFinish={goGoodsSearch} onChange={handleChangeSearchContent} />
      </SearchTopWrap>
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
            inventory={inventory}
            setInventoryMin={setInventoryMin}
            setInventoryMax={setInventoryMax}
            changeGoodsInfoSubmit={changeGoodsInfoSubmit}
            changeInventory={changeInventory}
            price={price}
            changePrice={changePrice}
          />
      </View>
    </View>
  )
}

export const GoodsList = memo(goodsListJsx);
