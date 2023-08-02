import {getTaro} from '@brushes/utils';
import {Form} from 'antd-mobile';
import {updateUmuserPw} from 'qj-bbc-api';

export const useChangePwd = () => {
  const [form] = Form.useForm();

  const onFinish = async (formVal:any) => {
    const Taro = getTaro();
    try {
      await updateUmuserPw(formVal);

      Taro.navigateBack({
        delta: 1
      })

    }catch (err) {
      console.log(err);
    }
  }

  return {
    form,
    onFinish
  }
}
