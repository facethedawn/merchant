import { useLoad } from '@tarojs/taro'
import {OrderList} from 'qj-bbc-mobile-materials';
import './index.scss'
import {PageWrap} from "@/components";

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      <PageWrap>
        <OrderList/>
      </PageWrap>
    </>
  )
}
