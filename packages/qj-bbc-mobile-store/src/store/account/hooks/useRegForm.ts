import {Form} from 'antd-mobile';
import {taroMessage} from "@brushes/utils";
import {saveUserMerchantByQuality} from 'qj-bbc-api';
import {jumpLink} from "../../../utils";
import {routerMap} from '../../../router-map';

export const useRegForm = ({lockForm}: any) => {
  const [form] = Form.useForm();

  const onFinish = async (formVal:any) => {
    const {code, userPhone, userPwsswd, userPwsswdAgin} = formVal;

    if(lockForm === 'true')  {
      taroMessage('协议未勾选', 'error');
      return;
    }

    if(userPwsswd !== userPwsswdAgin) {
      taroMessage('密码不一致', 'error');
      return;
    }

    try {
      const result = await saveUserMerchantByQuality({
        userinfoJosn: JSON.stringify({code, userPhone, userPwsswd, userPwsswdAgin})
      });
      console.log(result);
      if(result.success === true) {
        jumpLink(routerMap.accountLogin);
      }

    }catch (err) {
      console.log(err)
    }
  }

  return {
    form,
    onFinish
  }
}
