import { useLoad } from '@tarojs/taro'
import { Test } from 'qj-bbc-mobile-materials';
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      <Test/>
    </>
  )
}
