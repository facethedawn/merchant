import {useEffect, useState} from "react";
import {queryUserApplyPage} from 'qj-bbc-api';
import {getTaro} from '@brushes/utils';
import {jumpLink} from "../../../utils";
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

      setInfo(checkResult.list[0])
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
