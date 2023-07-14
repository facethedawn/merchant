import {getBaseUrl} from '@brushes/utils';
import Taro from "@tarojs/taro";
import {setHost} from 'qj-bbc-mobile-materials';
import {location} from "@tarojs/runtime";

export const handleHost = () => {
  const env = Taro.getEnv()

  if(env === 'WEAPP') {
    setHost(getBaseUrl());
  }else {
    setHost(location.host);
  }
}
