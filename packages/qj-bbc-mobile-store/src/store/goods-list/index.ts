import {useEffect, useRef, useState} from "react";
import {queryResourceGoodsPagePaltForMerchantEnter} from 'qj-bbc-api';
import {useImmutableCallback} from '@brushes/utils';
import {isEmpty} from 'lodash-es';

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

  useEffect(() => {
    init('isFirst');
  }, [refreshNum]);

  const init = useImmutableCallback((isFirst: string) => {
    isScroll.current = false;
    num.current = 0;
    onScroll(isFirst);
  });

  const onScroll = useImmutableCallback(async (isFirst = '') => {
    if (isScroll.current) return;
    setLoading(true);
    ++num.current;
    try {
      const data = await queryResourceGoodsPagePaltForMerchantEnter({
        page: num.current,
        rows: 10,
        goodsType: '00',
        dataStateStr: param
      });

      if(data.total !== all.current) {
        all.current = data.total;
      }

      console.log(40, data);

      isScroll.current = isEmpty(data.list) || data.list.length < 10;
      setList((prevState) => {
        if (!isFirst) {
          return prevState.concat(data.list)
        }
        console.log(47, data.list)
        return data.list
      });
      setLoading(false);
    } catch (err) {
      --num.current;
    }
  });


  return {
    list,
    loading,
    all
  }
}
