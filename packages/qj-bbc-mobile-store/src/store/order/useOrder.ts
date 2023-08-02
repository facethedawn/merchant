import {queryContractPageMemberCcode, updateContractStateBuiMat} from 'qj-bbc-api';
import {getTaro, useImmutableCallback} from "@brushes/utils";
import {useEffect, useRef, useState} from "react";
import {isEmpty} from "lodash-es";
import {jumpLink} from "../../utils";
import {routerMap} from "../../router-map";


interface paramType {
  childFlag: boolean,
  rows: number,
  page: number,
  dataState?: number
}

export const useOrder = ({config, searchConfig, refreshNum = 0}: any) => {
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
  }, [coe, refreshNum]);

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
      const searchParam = searchConfig[0][searchCoe].param;
      const param: paramType = {
        childFlag: true,
        rows: 10,
        page: num.current,
        [searchParam]: searchContent.current
      }

      if(coe !== 0) {
        param.dataState = +config[coe]['value']
      }

      const data = await queryContractPageMemberCcode(param);

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

  const cancelOrder =  (contractId: number) => {
    const Taro = getTaro();

    Taro.showModal({
      title: '提示',
      content: '确定要取消此订单吗？',
      success:  async(res: any) => {
        if (res.confirm) {
          try {
            await updateContractStateBuiMat({
              dataState: -1,
              contractId
            })
            console.log(113)
            init()
          }catch (err) {
            console.log(err);
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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
    changeSearchContent,
    cancelOrder
  }
}
