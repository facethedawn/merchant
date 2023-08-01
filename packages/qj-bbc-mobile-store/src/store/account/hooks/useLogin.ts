// @ts-nocheck
import { errorCallback } from '@brushes/request'
import {Form} from 'antd-mobile';
import {warrantyMerchantLogin, queryUserApplyPage} from 'qj-bbc-api';
import {getTaro} from '@brushes/utils';
import {routerMap} from '../../../router-map';
import {jumpLink, checkApply} from "../../../utils";
import {stackLength} from './useAccountForm';


export const useLogin = () => {
  const Taro = getTaro();
  const [form] = Form.useForm();

  const onFinish = (formVal: any) => {
    Taro.login({
      success: async (res: any) => {
        try {
          const result = await warrantyMerchantLogin({
            ...formVal,
            js_code: res.code
          })

          const userInfo = JSON.parse(result.dataObj.userInfo);
          const {ticketTokenid, userInfoCode} = userInfo;

          Taro.setStorageSync('saas-token', ticketTokenid);
          Taro.setStorageSync('userInfoCode', userInfoCode);

          checkApply();

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
