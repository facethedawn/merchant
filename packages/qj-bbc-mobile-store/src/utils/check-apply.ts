import {getTaro} from '@brushes/utils';
import {queryUserApplyPage, getUserserviceInfo} from 'qj-bbc-api';
import {routerMap} from '../router-map';
import {jumpLink} from './jump-link';
import {stackLength} from "../store";
import {errorCallback} from "@brushes/request";

export const checkApply = async () => {
  const Taro = getTaro();
  const userInfoCode = Taro.getStorageSync('userInfoCode');
  if (!userInfoCode) return;

  try {
    const checkResult = await getUserserviceInfo();
    const {dataState} = checkResult;

    if(dataState === 0) {
      const checkResult = await queryUserApplyPage({
        userinfoCode: userInfoCode
      })

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

    }else {
      jumpLink(routerMap.apply);
    }


  }catch (err) {
    console.log(err);
  }

}
