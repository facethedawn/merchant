import {useEffect, useState} from "react";
import {queryDpriceConfPageForMerchant} from "qj-bbc-api";


export const useMerchantRules = () => {
  const [list, setList] = useState([{
    dataState: 0,
    dpriceConfPrice: 0
  }]);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    try {
      const result = await queryDpriceConfPageForMerchant({
        dpriceConfType: 'memberCcode'
      })
      setList(result.list)
    }catch (err) {
      console.log(err);
    }
  }

  return {
    list
  }
}
