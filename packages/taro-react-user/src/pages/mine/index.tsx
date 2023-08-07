import {MinePage} from 'qj-bbc-mobile-materials';
import {PageWrap} from "@/components";
import {useDidShow} from "@tarojs/taro";
import {getPagesRefreshStore} from "@brushes/utils";
import {useState} from "react";

export default function Index() {
  const [mineNum, setMineNum] = useState(0)
  useDidShow(() => {
    setMineNum(getPagesRefreshStore().mineNum);
  })

  return (
    <PageWrap>
      <MinePage refreshNum={mineNum} />
    </PageWrap>
  )
}
