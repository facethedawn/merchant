import {PageWrap} from "@/components";
import {Agreement} from 'qj-bbc-mobile-materials';
import { useRouter } from '@tarojs/taro'

export default function Index() {
  const {params} = useRouter();
  return (
    <PageWrap>
      <Agreement params={params} />
    </PageWrap>
  )
}
