import {useEffect, useState} from "react";
import { getTaro } from '@brushes/utils';
import {queryUserinfoDetail} from 'qj-bbc-api';


export const usePersonInfo = () => {
  const Taro = getTaro();
  const [info, setInfo ] = useState({
    userinfoCode: '',
    userinfoCompname: '',
    companyShortname: '',
    userinfoLogo: '',
    userinfoCertUrl: '',
    userinfoCon: '',
    userinfoConPhone: '',
    userinfoCertNo: '',
    provinceName: '',
    cityName: '',
    areaName: '',
    companyAddress: '',
    userinfoScope: '',
    gmtCreate: 0,
    gmtModified: 0,
    umUserinfoQuaDomainList: [
      {
        userinfoQuaVaule1: 'userinfoConEmail',
        userinfoQuaVaule: ''
      },
      {
        userinfoQuaVaule1: 'servicePhone',
        userinfoQuaVaule: ''
      },
      {
        userinfoQuaVaule1: 'shopdeSdate',
        userinfoQuaVaule: ''
      },
      {
        userinfoQuaVaule1: 'shopdeEdate',
        userinfoQuaVaule: ''
      },
      {
        userinfoQuaVaule1: 'brandName',
        userinfoQuaVaule: ''
      },
      {
        userinfoQuaVaule1: 'classtreeName',
        userinfoQuaVaule: ''
      },
    ]
  });

  useEffect(() => {
    getInfo()
  }, []);

  const getInfo = async () => {
    const userInfoCode = Taro.getStorageSync('userInfoCode');

    try {
      const result = await queryUserinfoDetail({
        userInfoCode
      })
      setInfo(result);
    }catch (err) {
      console.log(err);
    }
  }

  const handleStupidArr = (arr: any, target: string) => {
    for (let i in arr) {
      if(arr[i]['userinfoQuaVaule1'] === target) {
        return arr[i]['userinfoQuaVaule']
      }
    }
  }

  const handleStupidArr2 = (arr: any, target: string) => {
    const result = []
    for (let i in arr) {
      if(arr[i]['userinfoQuaVaule1'] === target) {
        result.push(arr[i]['userinfoQuaVaule2'])

      }
    }
    return result.join(', ')
  }


  return {
    info,
    handleStupidArr,
    handleStupidArr2
  }
}
