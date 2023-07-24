import {useEffect, useRef, useState} from "react";
import {useImmutableCallback} from "@brushes/utils";
import {queryInfuencerAndChild} from "qj-bbc-api";
import {isEmpty} from "lodash-es";

export const useLiveList = () => {
  const [list, setList] = useState([]);
  const isScroll = useRef(false);
  const [loading, setLoading] = useState(false);
  const num = useRef(0);
  const all = useRef(0);

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

      const data = await queryInfuencerAndChild({
        rows: 10,
        page: num.current,
      });

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


  return {
    list,
    loading,
    onScroll
  }
}
