import { Component, PropsWithChildren } from 'react'
import {safeArea, handleHost} from "@/utils";
import { setTaro } from '@brushes/utils';
import { fly, wxEngine } from "@brushes/request";

import './app.scss'
// eslint-disable-next-line import/no-commonjs
const Taro = require('@tarojs/taro');

setTaro(Taro);
class App extends Component<PropsWithChildren, any> {

  componentDidMount() {

    if(Taro.getEnv() === 'WEB'){
      fly.engine= XMLHttpRequest
    } else {
      wxEngine();
      console.log(19, fly.engine)
    }

    safeArea();
    handleHost();
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
