import {PageWrap} from "@/components";
import {FillInExpress} from "qj-bbc-mobile-materials";
import {useRouter} from '@tarojs/taro'

export default function Index() {
  const router = useRouter();

  return (
    <>
      <PageWrap>
        <FillInExpress params={router.params} />
      </PageWrap>
    </>
  )
}
