import {useEffect, useState} from "react";
import {queryUserApplyPage} from 'qj-bbc-api';
import {getTaro} from '@brushes/utils';
import {jumpLink, jumpTabBar} from "../../../utils";
import {routerMap} from "../../../router-map";


export const useApplyProgress = () => {
  const Taro = getTaro();
  const [info, setInfo] = useState({
    userinfoCompname: '',
    gmtCreate: '',
    dataState: 0,
    memo: ''
  });

  useEffect(() => {
    init();
  }, [])


  const init = async () => {
    const userInfoCode = Taro.getStorageSync('userInfoCode');
    try {
      const checkResult = await queryUserApplyPage({
        userinfoCode: userInfoCode
      })
      const result = checkResult.list[0];
      const {dataState} = result;
      setInfo(result);
      if(dataState === 1) {
        jumpTabBar(routerMap.goodList);
      }

    }catch (err) {
      console.log(err)
    }
  }

  const goApply = () => {
    jumpLink(routerMap.apply);
  }


  return {
    info,
    goApply
  }
}
