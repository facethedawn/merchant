// @ts-nocheck

import {Form} from 'antd-mobile';
import {warrantyMerchantLogin} from 'qj-bbc-api';
import {getTaro} from '@brushes/utils';
import {routerMap} from '../../../router-map';
import {jumpLink, jumpTabBar} from "../../../utils";

const Taro = getTaro();

export const useLogin = () => {

  const [form] = Form.useForm();

  const onFinish = (formVal: any) => {
    Taro.login({
      success: async (res: any) => {
        console.log(15, res)
        try {
          const result = await warrantyMerchantLogin({
            ...formVal,
            js_code: res.code
          })

          const userInfo = JSON.parse(result.dataObj.userInfo);

          Taro.setStorageSync('saas-token', userInfo.ticketTokenid);
          console.log(11, userInfo);
          jumpTabBar(routerMap.goodList)
        } catch (err) {
          console.log(err)
        }
      }
    })


  }

  const goMobileLogin = () => {
    jumpLink(routerMap.mobileLogin);
  }

  const goAccountLogin = () => {
    // jumpLink(routerMap.apply);
    jumpLink(routerMap.accountLogin);
  }

  return {
    form,
    onFinish,
    goMobileLogin,
    goAccountLogin
  }
}
