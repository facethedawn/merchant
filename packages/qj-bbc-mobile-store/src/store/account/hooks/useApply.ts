// @ts-nocheck

import {
  queryClasstreePage,
  queryBrandPage,
  queryProvincePage,
  queryAreaPage,
  saveUpdateUserinfoapply
} from 'qj-bbc-api';
import {useCallback, useEffect, useState} from "react";
import {isNull, isEmpty, get} from "lodash-es";
import {Form} from 'antd-mobile';
import {getTaro, getBaseUrl, taroMessage} from "@brushes/utils";
import {jumpLink} from "../../../utils";
import {routerMap} from "../../../router-map";

const baseUrl = getBaseUrl();

export const useApply = () => {
  const Taro = getTaro();
  const directCity = ['1', '2', '3', '4'];
  const [form] = Form.useForm();
  const [logo, setLogo] = useState('');
  const [license, setLicense] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [provinceList, setProvinceList] = useState([]);
  const [provinceCoe, setProvinceCoe] = useState(null);
  const [cityList, setCityList] = useState([]);
  const [cityCoe, setCityCoe] = useState(null);
  const [areaList, setAreaList] = useState([]);
  const [areaCoe, setAreaCoe] = useState(null);

  const [brandList, setBrandList] = useState<any>([]);
  const [brand, setBrand] = useState([]);
  const [classifyList, setClassifyList] = useState<any>([]);
  const [classify, setClassify] = useState<any>([]);


  useEffect(() => {
    getBrand()
    getClassifyTree()
    getProvinceList()

  }, [])

  const getProvinceList = async () => {
    try {
      const result = await queryProvincePage();
      setProvinceList(result.list)
    } catch (err) {
      console.log(err)
    }
  }

  const getPath = (url) => {
    const index = url.indexOf('/paas/shop');
    if (index >= 0) {
      return url.substring(index);
    }
    return url;
  }


  const getLastClassTreeName = (obj: any): string => {
    if (isNull(obj.childList) || isEmpty(obj.childList)) {
      return obj.classtreeName;
    } else {
      return getLastClassTreeName(get(obj, ['childList', '0']));
    }
  }

  const getChildList = (arr: any[]): any[] => {
    let result: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      let childList = arr[i].childList;
      if (childList) {
        result = result.concat(getChildList(childList));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  const chooseImg = (type) => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res: any) {
        Taro.uploadFile({
          url: `${baseUrl}web/rs/goodsFile/uploadGoodsFiles.json`, //仅为示例，非真实的接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          header: {
            'saas-agent': 'qj-wemini',
            'saas-token': Taro.getStorageSync('saas-token')
          },
          success(res: any) {
            const response = JSON.parse(res.data);
            const resultImg = baseUrl + response.fileUrl;
            switch (type) {
              case 'logo':
                return setLogo(resultImg);
              case 'license':
                return setLicense(resultImg)
            }

            // const isTaro = getEnv();
            // if (response.errorCode === 'nologin') {
            //   if (isTaro) {
            //     navigatorHandler('/account/auth/index');
            //   } else {
            //     navigatorHandler('/account/mobileLogin/index');
            //   }
            // } else {
            //   const resultImg = baseUrl + response.fileUrl;
            //   setImgGroup((prevState: any) => [...prevState, resultImg]);
            // }
          }
        });
      }
    });
  };


  const getBrand = async () => {
    try {
      const result = await queryBrandPage()
      const {list} = result;
      const resultArr = [];
      for (let key in list) {
        resultArr.push({
          value: key,
          name: list[key].brandName,
          checked: false,
          code: list[key].brandCode
        })
      }
      setBrandList(resultArr);
    } catch (err) {
      console.log(err);
    }
  }


  const pickBrand = useCallback((val: any) => {
    const target = val.detail.value;
    setBrand(target);
  }, [])


  const getClassifyTree = async () => {
    try {
      const result = await queryClasstreePage({
        classtreeName: ""
      })

      const list = getChildList(result);
      const resultArr = [];
      for (let key in list) {
        resultArr.push({
          value: key,
          name: list[key].classtreeName,
          checked: false,
          code: list[key].classtreeCode
        })
      }
      setClassifyList(resultArr);

    } catch (err) {
      console.log(58, err)
    }
  }

  const pickClassify = useCallback((val: any) => {
    const target = val.detail.value;
    setClassify(target);
  }, [])

  const onChangeTime = (type, chooseVal) => {
    const result = chooseVal.detail.value

    switch (type) {
      case 'start':
        return setStartTime(result);
      case 'end':
        return setEndTime(result);
    }
  }

  const onChangeProvince = async (chooseVal: any) => {
    const index = +chooseVal.detail.value;
    const provinceCode = provinceList[index]['provinceCode']

    if (directCity.includes(provinceCode)) {
      setCityList([{
        areaName: provinceList[index]['provincName'],
        areaCode: provinceList[index]['provinceCode'],
      }]);
    } else {
      try {
        const result = await queryAreaPage({provinceCode});
        setCityList(result.list);
      } catch (err) {
        console.log(err)
      }
    }
    form.setFieldValue('province', index)
    setProvinceCoe(index);
    setAreaCoe(null);
    setCityCoe(null);
  }

  const onChangeCity = async (chooseVal: any) => {
    const index = +chooseVal.detail.value;
    const areaParentCode = cityList[index]['areaCode'];

    if (directCity.includes(areaParentCode)) {
      try {
        const result = await queryAreaPage({provinceCode: areaParentCode});
        setAreaList(result.list);
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const result = await queryAreaPage({
          areaParentCode
        })
        setAreaList(result.list);
      } catch (err) {
        console.log(err);
      }
    }
    form.setFieldValue('city', index)
    setCityCoe(index)
    setAreaCoe(null);
  }

  const onChangeArea = async (chooseVal: any) => {
    const index = +chooseVal.detail.value;
    setAreaCoe(index);

    form.setFieldValue('area', index);
  }

  const onFinish = async (formVal: any) => {

    const {
      userinfoCompname,
      companyShortname,
      userinfoCertNo,
      companyAddress,
      userinfoScope,
      userinfoCon,
      userinfoConPhone,
      userinfoConEmail,
      servicePhone
    } = formVal

    const resultObj = {
      userinfoCode: Taro.getStorageSync('userInfoCode'),
      userinfoCompname,
      userinfoType: 2,
      userinfoCertUrl: license ? getPath(license) : '',
      provinceCode: provinceList[provinceCoe].provinceCode,
      provinceName: provinceList[provinceCoe].provincName,
      cityCode: cityList[cityCoe].areaCode,
      cityName: cityList[cityCoe].areaName,
      areaCode: areaList[areaCoe].areaCode,
      areaName: areaList[areaCoe].areaName,
      umUserinfoapplyQuaList: []
    }

    const arr = resultObj.umUserinfoapplyQuaList

    for (let i = 0; i < brand.length; i++) {
      arr.push({
        userinfoapplyQuaKey: "userinfoQua_brandCode",
        userinfoapplyQuaVaule: brandList[i]['code'],
        userinfoapplyQuaVaule1: "brandName",
        userinfoapplyQuaVaule2: brandList[i]['name']
      })
    }

    for (let i = 0; i < classify.length; i++) {
      arr.push({
        userinfoapplyQuaKey: "userinfoQua_classtreeCode",
        userinfoapplyQuaVaule: classifyList[i]['code'],
        userinfoapplyQuaVaule1: "classtreeName",
        userinfoapplyQuaVaule2: classifyList[i]['name']
      })
    }

    if (companyAddress) {
      arr.push({
        userinfoapplyQuaKey: 'userinfo_companyAddress',
        userinfoapplyQuaVaule: companyAddress,
        userinfoapplyQuaVaule1: 'companyAddress',
        userinfoapplyQuaVaule2: '营业执照地址'
      })
    }


    if (companyShortname) {
      arr.push({
        userinfoapplyQuaKey: 'userinfo_companyShortname',
        userinfoapplyQuaVaule: companyShortname,
        userinfoapplyQuaVaule1: 'companyShortname',
        userinfoapplyQuaVaule2: '商家简称'
      })
    }

    if (userinfoCertNo) {
      arr.push({
        userinfoapplyQuaKey: 'userinfo_userinfoCertNo',
        userinfoapplyQuaVaule: userinfoCertNo,
        userinfoapplyQuaVaule1: 'userinfoCertNo',
        userinfoapplyQuaVaule2: '营业执照编号'
      })
    }


    if (logo) {
      arr.push(
        {
          userinfoapplyQuaKey: 'userinfo_userinfoLogo',
          userinfoapplyQuaVaule: getPath(logo),
          userinfoapplyQuaVaule1: 'userinfoLogo',
          userinfoapplyQuaVaule2: '商户Logo'
        }
      )
    }

    if (license) {
      arr.push(
        {
          userinfoapplyQuaKey: 'userinfo_userinfoCertUrl',
          userinfoapplyQuaVaule: getPath(license),
          userinfoapplyQuaVaule1: 'userinfoCertUrl',
          userinfoapplyQuaVaule2: '营业执照地址'
        }
      )
    }


    if (userinfoScope) {
      arr.push(
        {
          userinfoapplyQuaKey: 'userinfo_userinfoScope',
          userinfoapplyQuaVaule: '营业范围',
          userinfoapplyQuaVaule1: userinfoScope,
          userinfoapplyQuaVaule2: '营业范围'
        },
      )
    }

    if (startTime) {
      arr.push(
        {
          userinfoapplyQuaKey: 'userinfoQua_shopdeSdate',
          userinfoapplyQuaVaule: startTime,
          userinfoapplyQuaVaule1: 'shopdeSdate',
          userinfoapplyQuaVaule2: "营业开始时间"
        },
      )
    }

    if (endTime) {
      arr.push(
        {
          userinfoapplyQuaKey: 'userinfoQua_shopdeEdate',
          userinfoapplyQuaVaule: endTime,
          userinfoapplyQuaVaule1: 'shopdeEdate',
          userinfoapplyQuaVaule2: '营业截止时间'
        }
      )
    }

    if (userinfoCon) {
      arr.push(
        {
          userinfoapplyQuaKey: 'userinfo_userinfoCon',
          userinfoapplyQuaVaule: userinfoCon,
          userinfoapplyQuaVaule1: 'userinfoCon',
          userinfoapplyQuaVaule2: '联系人名称'
        }
      )
    }

    if (userinfoConPhone) {
      arr.push({
        userinfoapplyQuaKey: 'userinfo_userinfoConPhone',
        userinfoapplyQuaVaule: userinfoConPhone,
        userinfoapplyQuaVaule1: 'userinfoConPhone',
        userinfoapplyQuaVaule2: '联系人电话'
      })
    }

    if (userinfoConEmail) {
      arr.push({
        userinfoapplyQuaKey: 'userinfoQua_userinfoConEmail',
        userinfoapplyQuaVaule: userinfoConEmail,
        userinfoapplyQuaVaule1: 'userinfoConEmail',
        userinfoapplyQuaVaule2: '联系人邮箱'
      })
    }

    if (servicePhone) {
      arr.push({
        userinfoapplyQuaKey: 'userinfoQua_servicePhone',
        userinfoapplyQuaVaule: servicePhone,
        userinfoapplyQuaVaule1: 'servicePhone',
        userinfoapplyQuaVaule2: '客服电话'
      })
    }

    console.log(389, resultObj)


    try {
      await saveUpdateUserinfoapply({
        paramJson: JSON.stringify(resultObj)
      })
      taroMessage('提交成功');

      setTimeout(() => {
        jumpLink(routerMap.applyProgress)
      }, 2000);

    } catch (err) {
      console.log(err);
    }


  }


  return {
    form,
    onFinish,
    chooseImg,
    brandList,
    pickBrand,
    brand,
    classifyList,
    pickClassify,
    classify,
    logo,
    license,
    onChangeTime,
    startTime,
    endTime,
    provinceList,
    onChangeProvince,
    provinceCoe,
    cityList,
    onChangeCity,
    cityCoe,
    areaList,
    onChangeArea,
    areaCoe
  }
}
