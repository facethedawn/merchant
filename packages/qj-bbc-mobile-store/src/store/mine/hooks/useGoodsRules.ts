import {useEffect, useRef, useState} from "react";
import {queryDpriceConfPage} from 'qj-bbc-api';
import {useImmutableCallback} from "@brushes/utils";
import {isEmpty} from "lodash-es";

export const useGoodsRules = () => {
  const isScroll = useRef(false);
  const num = useRef(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([{
    dpriceConfPicurl: '',
    dpriceConfValue: '',
    dpriceConfValuename: '',
    dpriceConfPrice: 0,
    dataState: 0,
    dpriceConfValuen: '',
  }]);

  useEffect(() => {
    init()
  }, []);


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

      const data = await queryDpriceConfPage({
        dpriceConfType: 'skuNo',
        rows: 10,
        page: num.current,
      });

      console.log(38, data);

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
  return {
    loading,
    list,
    onScroll
  }
}
