import {useEffect, useState} from "react";
import {queryDpriceConfPageForMerchant} from "qj-bbc-api";


export const useMerchantRules = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    try {
      const result = await queryDpriceConfPageForMerchant({
        dpriceConfType: 'memberCcode'
      })

      console.log(result);
      setList([])
    }catch (err) {
      console.log(err);
    }
  }

  return {
    list
  }
}
