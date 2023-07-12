import {antdMobile} from '@brushes/simulate-component';
import {getTaro} from '@brushes/utils';
import {useEffect, useState} from "react";


const Taro = getTaro();

export const stackLength = () => {
  const arr = Taro.getCurrentPages();
  const obj = {
    pageIndex: 0
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]['$taroPath'].indexOf('account/') >= 0) {
      if (i === 0) {
        obj.pageIndex = 0
      } else {
        obj.pageIndex = arr.length - i
      }
      break
    }
  }
  return obj.pageIndex;
}

export const useAccountForm = (type?: string) => {
  const {Form} = antdMobile;
  const [form] = Form.useForm();
  const [lockForm, setLockForm] = useState('true');
  const [address, setAddress] = useState('');
  const [startTime, setStartTime] = useState({
    label: '',
    stamp: 0,
  });
  const [endTime, setEndTime] = useState({
    label: '',
    stamp: 0,
  });
  const [classifyList, setClassifyList] = useState<any>([]);
  const [classify, setClassify] = useState('');


  useEffect(() => {
    setLockForm('true');
  }, [])



  const onFinish = async (formVal: any) => {
    switch (type) {
      case 'reg':
        await regSubmit(formVal);
        break;
      case 'accountLogin':
        await accountLoginSubmit(formVal);
        break;
      case 'apply':
        await applySubmit(formVal);
        break;
    }
  }

  const chooseImg = () => {
    const Taro = getTaro();
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res: any) {

        console.log('img', res);
        // Taro.uploadFile({
        //   url: `${baseUrl}web/oc/refund/uploadRefFile.json`, //仅为示例，非真实的接口地址
        //   filePath: res.tempFilePaths[0],
        //   name: 'file',
        //   header: {
        //     'saas-agent': 'qj-wemini',
        //     'saas-token': getStorage('saas-token')
        //   },
        //   success(res: any) {
        //     const response = JSON.parse(res.data);
        //     const isTaro = getEnv();
        //     if (response.errorCode === 'nologin') {
        //       if (isTaro) {
        //         navigatorHandler('/account/auth/index');
        //       } else {
        //         navigatorHandler('/account/mobileLogin/index');
        //       }
        //     } else {
        //       const resultImg = baseUrl + response.fileUrl;
        //       setImgGroup((prevState: any) => [...prevState, resultImg]);
        //     }
        //   }
        // });
      }
    });
  };

  const changeAddress = (evt: any) => {
    const select = evt.detail.value;
    setAddress(select.join('-'));
  }

  const selectStart = (evt: any) => {
    setStartTime({
      label: evt.detail.value,
      stamp: evt.timeStamp
    });
  }

  const selectEnd = (evt: any) => {
    setEndTime({
      label: evt.detail.value,
      stamp: evt.timeStamp
    });
  }

  const accountLoginSubmit = async (formVal: any) => {
    console.log('登录', formVal)
  }

  const regSubmit = async (formVal: any) => {
    console.log('注册', formVal)
  }

  const applySubmit = async (formVal: any) => {
    console.log('申请入驻', formVal);
  }


  const changeLockForm = (event: any) => {
    const result = event.detail.value.length;
    setLockForm(result === 1 ? 'false' : 'true')
  }


  return {
    form,
    chooseImg,
    onFinish,
    changeAddress,
    address,
    startTime,
    setStartTime,
    selectStart,
    endTime,
    setEndTime,
    selectEnd,
    lockForm,
    setLockForm,
    changeLockForm,
    classifyList,
    setClassifyList,
    classify,
    setClassify
  }
}
