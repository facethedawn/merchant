import {warrantyLogin, saveUmuserPhoneNoCodeByWX} from 'qj-bbc-api';
import {getTaro, taroMessage} from '@brushes/utils';
import {errorCallback} from '@brushes/request';
import {get} from 'lodash-es';
import {routerMap} from '../../../router-map';
import {jumpLink} from "../../../utils";
import {stackLength} from './useAccountForm';
import {useEffect} from "react";

const Taro = getTaro();

export const useAuth = () => {

  useEffect(() => {
    Taro.checkSession({
      success: () => {
        console.log('未失效')
      },
      fail: () => {
        taroMessage('授权已失效', 'error');
        console.log('失效')
      }
    })
  }, [])


  const getPhone = async (e: any) => {

    Taro.login({
      success: async (res: any) => {
        const warrantyResult = await warrantyLogin({
          'js_code': res.code
        })

        const {register, userInfo, userOpenid} = get(warrantyResult, 'dataObj');

        console.log(17, register, userInfo, userOpenid);


        jumpLink(routerMap.login);
        // Taro.navigateTo({
        //   url: routerMap.login
        // })

        if (register === 'true') {
          const result = await registerImpl(e, userOpenid)
          setAuthImpl(result.dataObj.ticketTokenid)
          return
        }

        const user = JSON.parse(userInfo);
        setAuthImpl(user.ticketTokenid);
      }
    })
  }

  const registerImpl = (e: any, userOpenid: string) => saveUmuserPhoneNoCodeByWX({
    code: e.detail.code,
    userOpenid
  })

  const setAuthImpl = (token: string) => {
    Taro.setStorageSync('saas-token', token);
    callback()
  }

  const callback = () => {
    Taro.navigateBack({
      delta: stackLength(),
      success: function () {
        errorCallback()
      }
    })
  }


  const goReg = () => {
    jumpLink(routerMap.reg);
  }


  return {
    getPhone,
    goReg
  }
}
