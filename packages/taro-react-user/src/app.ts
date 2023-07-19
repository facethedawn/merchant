import { Component, PropsWithChildren } from 'react'
import { setTaro, getStorage } from '@brushes/utils';
import { fly, wxEngine } from "@brushes/request";
import {safeArea, handleHost} from "@/utils";
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
    }
    fly.interceptors.request.use((config) => {
      //给所有请求添加自定义header
      config.headers = {
        'saas-token': getStorage('saas-token'),
      }

      config.baseURL = process.env.REACT_APP_BASE_URL;

      if(Taro.getEnv() !== 'WEB') {
        config.headers['Saas-Agent'] = 'qj-wemini';
      }
      if(Taro.getEnv() === 'WEB' && process.env.NODE_ENV === 'production') {
        config.baseURL = location.origin + '/'
      }
      return config;
    })

    safeArea();
    handleHost();
  }

  componentDidShow () {
  }

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
