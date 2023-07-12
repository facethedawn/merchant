import {useEffect, useState} from "react";
import {config} from './searchConfig';

export const useCommonSearch = () => {
  const [params, setParams] = useState({
    label: '',
    id: 0
  });

  useEffect(() => {
    setParams(config[0][0]);
  }, [])

  const changeIndex = (e: any) => {
    const coe = e.detail.value[0];
    setParams(config[0][coe]);
  }

  return {
    changeIndex,
    params,
    setParams,
    config,
  }
}
