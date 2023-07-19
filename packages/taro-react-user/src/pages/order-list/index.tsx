import {PageWrap} from "@/components";
import {OrderList} from "qj-bbc-mobile-materials";
import {getPagesRefreshStore} from "@brushes/utils";
import {useDidShow} from "@tarojs/taro";
import {useState} from "react";

export default function Index() {
  const [fillInExpress, setFillInExpress] = useState(0)

  useDidShow(() => {
    setFillInExpress(getPagesRefreshStore().fillInExpress);
  })

  return (
    <>
      <PageWrap>
        <OrderList refreshNum={fillInExpress} />
      </PageWrap>
    </>
  )
}
