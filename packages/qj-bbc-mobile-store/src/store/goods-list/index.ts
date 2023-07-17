// @ts-nocheck

import {useEffect, useRef, useState} from "react";
import {queryPmSkuPage, queryClasstreeYzf, updateAuditOrCannelForPass} from 'qj-bbc-api';
import {useImmutableCallback} from '@brushes/utils';
import {isEmpty} from 'lodash-es';
import {extractLastChildList} from '../../utils';
import {taroMessage} from "@brushes/utils";


interface useGoodsListType {
  param?: string,
  refreshNum?: number
}


export const useGoodsList = ({param = '', refreshNum = 0}: useGoodsListType) => {
  const isScroll = useRef(false);
  const num = useRef(0);
  const all = useRef(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [popupShow, setPopupShow] = useState(false);
  const [chooseItem, setChooseItem] = useState<any>({
    goodsName: '',
    dataPic: '',
    goodsShowno: '',
    goodsNum: '',
    pricesetNprice: '',
    skuName: ''
  });
  const [classifyArr, setClassifyArr] = useState<any>([{
    classtreeName: '全部',
    classtreeCode: ''
  }]);
  const [chosenClassifyIndex, setChosenClassifyIndex] = useState(0);

  const [filterPopupShow, setFilterPopupShow] = useState(true);

  const [upDownState, setUpDownState] = useState(null);


  //
  // const [filterCondition, setFilterCondition] = useState([])


  useEffect(() => {
    init();
  }, [refreshNum]);

  useEffect(() => {
    getClassify()
  }, [])


  const getClassify = async () => {
    try {
      const result = await queryClasstreeYzf();

      const arr = extractLastChildList(result);

      setClassifyArr((prev: any) => [...prev, ...arr])

      console.log(48, arr);

    } catch (err) {
      console.log(err)
    }
  }

  const init = useImmutableCallback(() => {
    isScroll.current = false;
    num.current = 0;
    onScroll();
  });

  const onScroll = useImmutableCallback(async () => {
    if (isScroll.current) return;
    setLoading(true);
    ++num.current;
    try {
      const params = {
        page: num.current,
        rows: 10,
        exportFuzzy: true,
      }


      if(upDownState !== null) {
        params.dataOpbillstate = upDownState
      }


      const data = await queryPmSkuPage(params);

      if (data.total !== all.current) {
        all.current = data.total;
      }

      isScroll.current = isEmpty(data.list) || data.list.length < 2;
      setList((prevState) => {
        console.log(47, data.list)
        if (num.current !== 1) {
          console.log(104)
          return prevState.concat(data.list)
        }
        return data.list
      });
      setLoading(false);
    } catch (err) {
      --num.current;
    }
  });

  const handlePopupBtn = (item: any, state: number) => {
    if (state === 0) {
      setChooseItem(item);
      setPopupShow(true);
    } else if (state === 2) {
      taroMessage('请先下架商品', 'error');
    }
  }

  const handleUpDown = async (skuId: string, dataState: number) => {
    try {
      const result = await updateAuditOrCannelForPass({skuIds: skuId, flag: dataState === 0 ? 1 : 0});
      console.log(112, result);
    } catch (err) {
      console.log(err)
    }
  }

  const resetState = () => {
    setUpDownState(null)
  }

  const filterSubmit = () => {
    setFilterPopupShow(false);
  }


  return {
    onScroll,
    list,
    loading,
    all,
    popupShow,
    setPopupShow,
    setChooseItem,
    chooseItem,
    classifyArr,
    setClassifyArr,
    chosenClassifyIndex,
    setChosenClassifyIndex,
    handlePopupBtn,
    handleUpDown,
    filterPopupShow,
    setFilterPopupShow,
    upDownState,
    setUpDownState,
    resetState,
    filterSubmit
  }
}
