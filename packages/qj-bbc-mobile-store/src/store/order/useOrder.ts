import {queryContractPageMemberCcode} from 'qj-bbc-api';
import {useImmutableCallback} from "@brushes/utils";
import {useEffect, useRef, useState} from "react";
import {isEmpty} from "lodash-es";
import {jumpLink} from "../../utils";
import {routerMap} from "../../router-map";

export const useOrder = () => {
  const isScroll = useRef(false);
  const num = useRef(0);
  const all = useRef(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);



  useEffect(() => {
    init();
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

      const data = await queryContractPageMemberCcode({
        childFlag: true,
        rows: 10,
        page: num.current,
      });

      if (data.total !== all.current) {
        all.current = data.total;
      }

      isScroll.current = isEmpty(data.list) || data.list.length < 2;
      setList((prevState) => {
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

  const goFillIn = (item: any) => {
    jumpLink(`${routerMap.fillInExpress}?item=${JSON.stringify(item)}`);
  }


  return {
    loading,
    list,
    goFillIn
  }
}
