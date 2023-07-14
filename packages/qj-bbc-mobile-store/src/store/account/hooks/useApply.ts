import {Form} from 'antd-mobile';
// import {useState} from "react";
import {uploadImg} from '../../../utils';


interface useApplyType {
  lockForm: string
}

export const useApply = ({lockForm}: useApplyType) => {
  const [form] = Form.useForm();

  // const [logoUpload, setLogoUpload] = useState('');

  const chooseLogo =() => {
    console.log(123)
    uploadImg((res: any) => {
      console.log(16, res)
    })
  }




  const onFinish = (a: any) => {
    console.log(12, a);
  }

  return {
    form,
    onFinish,
    chooseLogo
  }
}

