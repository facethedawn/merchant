import {warrantyLogin} from 'qj-bbc-api';
import { getTaro } from '@brushes/utils';
import {get} from 'lodash-es';
import {routerMap} from '../../../router-map';
import {jumpLink} from "../../../utils";

export const useAuth = () => {



  const getPhone = async () => {
    const Taro = getTaro();
    Taro.login({
      success: async (res:any) => {
        const warrantyResult = await warrantyLogin({
          'js_code': res.code
        })

        const { register, userInfo, userOpenid } = get(warrantyResult, 'dataObj');

        console.log(17, register, userInfo, userOpenid);

        jumpLink(routerMap.login);
        // Taro.navigateTo({
        //   url: routerMap.login
        // })

        // if(register === 'true') {
        //   // const result = await registerImpl(e, userOpenid)
        //   // setAuthImpl(result.dataObj.ticketTokenid)
        //   // return
        // }
        //
        // const user = JSON.parse(userInfo);
        // setAuthImpl(user.ticketTokenid);
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
