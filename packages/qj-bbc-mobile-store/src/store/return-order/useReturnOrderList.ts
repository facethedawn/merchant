import {useEffect, useRef, useState} from "react";
import {getTaro, useImmutableCallback, taroMessage} from "@brushes/utils";
import {queryByMemberCcodeMerchant, verificationRefundMerchant, supplierOcAudit, refuseApplication} from "qj-bbc-api";
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

  const handleCheckReturnOrder = (item: any, type: string) => {
    const Taro = getTaro();
    const {contractBillcode, refundCode} = item;
    const userinfoCode = Taro.getStorageSync('userInfoCode');

    if(type === 'pass') {
      Taro.showModal({
        title: '提示',
        content: '确定审核通过此退单?',
        success:  async(res:any) => {
          if (res.confirm) {
            try {
              const resultF = await verificationRefundMerchant({
                userinfoCode,
                contractBillcode
              })
              if (resultF.dataObj !== true) {
                taroMessage('订单参与营销', 'error');
              }else {
                await supplierOcAudit({
                  refundCode,
                  memo:'',
                  backType: 21
                })
                init();
              }
            }catch (err) {
              console.log(err);
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      Taro.showModal({
        title: '提示',
        content: '确定审核拒绝此退单?',
        success: async (res:any)=> {
          if (res.confirm) {
            try {
              await refuseApplication({
                refundCode,
                memo: '商家拒绝'
              })
              init();
            }catch (err) {
              console.log(err);
            }
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }



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
    handleCheckReturnOrder
  }
}
