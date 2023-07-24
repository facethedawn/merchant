import {useEffect, useState} from "react";
import {getContractByBillcode} from 'qj-bbc-api';

interface useOrderDetail {
  contractBillcode: string
}


const originData = {
  contractBillcode: '',
  contractBbillcode: '',
  goodsReceiptPhone: '',
  goodsReceiptArrdess: '',
  goodsReceiptMem: '',
  gmtCreate: '',
  goodsList: [
    {
      goodsName: '',
      skuName: '',
      pricesetNprice: '',
      goodsNum: '',
      contractGoodsMoney: '',
      dataPic: ''
    }
  ]
}

export const useOrderDetail = ({contractBillcode}: useOrderDetail) => {
  const [data, setData] = useState<any>(originData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init();
  }, [])

  const init = async () => {
    setLoading(true);
    try {
      const result = await getContractByBillcode({
        contractBillcode
      })

      setData(result);

    }catch (err) {
      console.log(err)
    }finally {
      setLoading(false);
    }
  }

  return {
    loading,
    data,
  }
}
