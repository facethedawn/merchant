// @ts-nocheck

import {Form} from 'antd-mobile';
import {warrantyMerchantLogin} from 'qj-bbc-api';
import {getTaro} from '@brushes/utils';
import {routerMap} from '../../../router-map';
import {jumpLink} from "../../../utils";

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
          console.log(11, result)
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
    jumpLink(routerMap.accountLogin);
  }

  return {
    form,
    onFinish,
    goMobileLogin,
    goAccountLogin
  }
}
