import {useEffect, useState} from "react";
import {mineListConfig} from '../mine-list-config';
import {logininfo, getUserserviceInfo} from 'qj-bbc-api';
import { getTaro } from '@brushes/utils';
import {jumpLink} from "../../../utils";
import {routerMap} from "../../../router-map";


export const useMine = ({refreshNum = 0}) => {

  const [merchantInfo, setMerchantInfo] = useState({
    userinfoCompname: '',
    userinfoLogo: ''
  });


  useEffect(() => {
    console.log(18, refreshNum)
    init();
  }, [refreshNum])


  const init = async () => {
    const Taro = getTaro();
    const saasToken = Taro.getStorageSync('saas-token');

    if(!saasToken) {
      jumpLink(routerMap.auth);
    }else {
      try {
        const result = await logininfo();
        const {dataObj} = result;
        Taro.setStorageSync('userInfoCode', dataObj.userInfoCode);
        const info = await getUserserviceInfo({
          userId: dataObj.userId
        })
        console.log(36, info)
        setMerchantInfo(info);
      }catch (err) {
        console.log(err)
      }
    }
  }

  const logOut = () => {
    const Taro = getTaro();
    setMerchantInfo({
      userinfoCompname: '',
      userinfoLogo: ''
    })
    Taro.removeStorageSync('saas-token');
    Taro.removeStorageSync('userInfoCode');
    jumpLink(routerMap.auth);
  }


  return {
    init,
    config: mineListConfig,
    merchantInfo,
    logOut,
  }
}
