import { useLoad } from '@tarojs/taro'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      我的
    </>
  )
}
