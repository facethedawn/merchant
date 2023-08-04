import {useEffect, useRef, useState} from "react";
import {queryPmSkuPage, queryClasstreeYzf, updateAuditOrCannelForPass, updateSkuEditPass} from 'qj-bbc-api';
import {useImmutableCallback} from '@brushes/utils';
import {isEmpty} from 'lodash-es';
import {extractLastChildList} from '../../../utils';
import {taroMessage} from "@brushes/utils";


interface useGoodsListType {
  param?: string,
  refreshNum?: number,
  config: any
}

interface paramsType {
  page: number,
  rows: number,
  exportFuzzy: boolean,
  dataOpbillstate?: string,
  classtreeCode?: string,
  goodsName?: string,
  goodsNo?: string
}


export const useGoodsList = ({param = '', refreshNum = 0, config}: useGoodsListType) => {
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

  const [filterPopupShow, setFilterPopupShow] = useState(false);

  const [upDownState, setUpDownState] = useState(null);

  // 调整库存数
  const [inventory, setInventory] = useState(0);

  // 商品价格
  const [price, setPrice] = useState(0);

  const lock = useRef(false);

  const [chooseSearchTypeIndex, setChooseSearchTypeIndex] = useState(0);

  const [searchContent, setSearchContent] = useState('');

  const [shareShow, setShareShow] = useState(false);



  useEffect(() => {
    init();
  }, [refreshNum, chosenClassifyIndex]);

  useEffect(() => {
    getClassify()
  }, [])


  const getClassify = async () => {
    try {
      const result = await queryClasstreeYzf();

      const arr = extractLastChildList(result);

      setClassifyArr((prev: any) => [...prev, ...arr])

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
      const searchParam = config[0][chooseSearchTypeIndex].param;

      const params: paramsType = {
        page: num.current,
        rows: 10,
        exportFuzzy: true,
        [searchParam]: searchContent
      }

      if(upDownState !== null) {
        params.dataOpbillstate = upDownState
      }

      if(chosenClassifyIndex != 0) {
        params.classtreeCode = classifyArr[chosenClassifyIndex].classtreeCode
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
      setInventory(item.goodsNum);
      setPrice(item.pricesetNprice);
    } else if (state === 2) {
      taroMessage('请先下架商品', 'error');
    }
  }

  const handleUpDown = async (skuId: string, dataState: number) => {
    if (lock.current) return;
    lock.current = true;
    try {
      await updateAuditOrCannelForPass({skuIds: skuId, flag: dataState === 0 ? 1 : 0});
      init();
    } catch (err) {
      console.log(err)
    } finally {
      lock.current = false;
    }
  }

  const resetState = () => {
    setUpDownState(null)
  }

  const filterSubmit = () => {
    setFilterPopupShow(false);
    init();
  }

  const changeGoodsInfoSubmit = async (item: any) => {
    const {skuCode, goodsCode, skuId, dataOpbillstate, skuNo} = item;

    try {
      await updateSkuEditPass({
        skuCode,
        goodsCode,
        skuId,
        dataOpbillstate,
        skuNo,
        goodsSupplynum: inventory,
        pricesetNprice: price,
      })
      setPopupShow(false);
      init()
    }catch (err) {
      console.log(err)
    }
  }

  const setInventoryMin = () => {
    setInventory(0);
  }

  const setInventoryMax = () => {
    setInventory(9999);
  }

  const changeInventory = (formVal: any) => {
    setInventory(formVal.detail.value);
  }

  const changePrice = (formVal:any) => {
    setPrice(formVal.detail.value)
  }

  const changeSearchType = (e: any) => {
    const coe = e.detail.value[0];
    setChooseSearchTypeIndex(coe);
  }

  const handleChangeSearchContent = (e: any) => {
    setSearchContent(e);
  }

  const goGoodsSearch = () => {
    init();
  }

  const handleShareShow = (item:any) => {
    setShareShow(true);
    setChooseItem(item)
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
    changePrice,
    shareShow,
    setShareShow,
    handleShareShow
  }
}
