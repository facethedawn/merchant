import {Form} from 'antd-mobile';

export const useRegForm = () => {
  const [form] = Form.useForm();

  const onFinish = (a:any) => {
    console.log(4, a);
  }

  return {
    form,
    onFinish
  }
}
