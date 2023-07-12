import { useLoad } from '@tarojs/taro'
import {PageWrap} from "@/components";
import {View} from "@tarojs/components";

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View>
      <PageWrap sub>
        <View style={{
          height: 2000,
          backgroundColor: "green"
        }}>subpage</View>
      </PageWrap>
    </View>
  )
}
