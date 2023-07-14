import {useEffect, useState} from "react";
import {config} from './searchConfig';
import {getTaro} from "@brushes/utils";
import {queryResourceGoodsPagePaltForMerchantEnter} from 'qj-bbc-api';

const Taro = getTaro();

export const useCommonSearch = () => {
  const [sysBtnObj, setSysBtnObj] = useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  });
  const [params, setParams] = useState({
    label: '',
    param: ''
  });

  useEffect(() => {
    setParams(config[0][0]);
    getSysBtnObj()
  }, [])

  const getSysBtnObj = () =>  {
    setSysBtnObj(Taro.getStorageSync('systemTopButton'));
  }

  const changeIndex = (e: any) => {
    const coe = e.detail.value[0];
    setParams(config[0][coe]);
  }

  const handleSearch = async () => {
    try {
      const result = queryResourceGoodsPagePaltForMerchantEnter();

      console.log(result);
    }catch (err) {
      console.log(err);
    }
  }


  return {
    changeIndex,
    params,
    setParams,
    config,
    sysBtnObj,
    handleSearch
  }
}
