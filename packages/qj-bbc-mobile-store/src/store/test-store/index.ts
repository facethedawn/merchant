import {useEffect, useState} from "react";
import {queryResourceGoodsPagePaltForMerchantEnter} from 'qj-bbc-api';


export const useTestStore = () => {
  const [info, setInfo] = useState('test store');
  useEffect(() => {
    queryResourceGoodsPagePaltForMerchantEnter().then(res => {
      console.log(19, res);
    })
  })

  return {
    info,
    setInfo
  }
}
