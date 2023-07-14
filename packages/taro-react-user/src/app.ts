import { Component, PropsWithChildren } from 'react'
import {safeArea, handleHost} from "@/utils";


import './app.scss'

class App extends Component<PropsWithChildren, any> {

  componentDidMount() {
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
