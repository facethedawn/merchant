import {useEffect, useRef, useState} from "react";
import {useImmutableCallback} from "@brushes/utils";
import {queryByMemberCcodeMerchant} from "qj-bbc-api";
import {isEmpty} from "lodash-es";
import {jumpLink} from "../../utils";
import {routerMap} from "../../router-map";

interface paramType {
  rows: number,
  page: number,
  dataState?: number
}


export const useReturnOrderList = ({config, searchConfig}: any) => {
  const isScroll = useRef(false);
  const num = useRef(0);
  const all = useRef(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [coe, setCoe] = useState(0);

  const [searchCoe, setSearchCoe] = useState(0);

  const searchContent = useRef('');

  useEffect(() => {
    init();
  }, [coe]);

  const init = useImmutableCallback(() => {
    console.log(36, coe)
    isScroll.current = false;
    num.current = 0;
    onScroll();
  });


  const onScroll = useImmutableCallback(async () => {
    if (isScroll.current) return;
    setLoading(true);
    ++num.current;

    try {
      const searchParam = searchConfig[0][searchCoe].param;
      const param: paramType = {
        rows: 10,
        page: num.current,
        [searchParam]: searchContent.current
      }

      if(coe !== 0) {
        param.dataState = +config[coe]['value']
      }
      console.log(61, coe)
      const data = await queryByMemberCcodeMerchant(param);

      if (data.total !== all.current) {
        all.current = data.total;
      }

      isScroll.current = isEmpty(data.list) || data.list.length < 10;
      setList((prevState) => {
        if (num.current !== 1) {
          return prevState.concat(data.list)
        }
        return data.list || []
      });
      setLoading(false);
    } catch (err) {
      --num.current;
    }
  });

  const goFillIn = (item: any) => {
    jumpLink(`${routerMap.fillInExpress}?item=${JSON.stringify(item)}`);
  }

  const goOrderDetail = (item: any) => {
    const {contractBillcode} = item;
    jumpLink(`${routerMap.orderDetail}?contractBillcode=${contractBillcode}`);
  }

  const changeTab = (index:number) => {
    setCoe(index);
  }

  const changeSearchType = (target: any) => {
    setSearchCoe(target.detail.value[0]);
  }

  const onFinish = () => {
    init();
  }

  const changeSearchContent = (target: any) => {
    searchContent.current = target.detail.value;
  }

  return {
    loading,
    list,
    onScroll,
    goFillIn,
    goOrderDetail,
    coe,
    changeTab,
    searchCoe,
    changeSearchType,
    onFinish,
    changeSearchContent
  }
}
