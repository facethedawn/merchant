import {GoodsList} from 'qj-bbc-mobile-materials';
import {PageWrap} from "@/components";
import {useDidShow} from "@tarojs/taro";
import {getPagesRefreshStore} from '@brushes/utils';

export default function Index() {
  useDidShow(() => {
    console.log(8, getPagesRefreshStore())
  });
  return (
    <>
      <PageWrap >
        <GoodsList />
      </PageWrap>
    </>
  )
}
