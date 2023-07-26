// @ts-nocheck
import { errorCallback } from '@brushes/request'
import {Form} from 'antd-mobile';
import {warrantyMerchantLogin, queryUserApplyPage} from 'qj-bbc-api';
import {getTaro} from '@brushes/utils';
import {routerMap} from '../../../router-map';
import {jumpLink} from "../../../utils";
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

          const checkResult = await queryUserApplyPage({
            userinfoCode: userInfoCode
          })

          console.log(33, checkResult.list)

          const target = checkResult.list;

          if(target.length === 0) {
            jumpLink(routerMap.apply)
            return
          }else {
            const {dataState} = target[0];

            console.log(43, dataState)

            switch (dataState) {
              // 待审核
              case 0:
                return jumpLink(routerMap.applyProgress);

              // 审核通过
              case 1:
                return Taro.navigateBack({
                  delta: stackLength(),
                  success: (res) => {
                    console.log('调用前', res);
                    errorCallback();
                  }
                })

              // 审核拒绝
              case 2:
                return jumpLink(routerMap.applyProgress)
            }
          }




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
