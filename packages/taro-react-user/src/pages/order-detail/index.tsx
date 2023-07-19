import {PageWrap} from "@/components";
import {OrderDetail} from "qj-bbc-mobile-materials";
import {useRouter} from "@tarojs/taro";

export default function Index() {
  const router = useRouter();
  const {contractBillcode} = router.params

  return (
    <>
      <PageWrap>
        <OrderDetail contractBillcode={contractBillcode} />
      </PageWrap>
    </>
  )
}
