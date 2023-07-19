import {useEffect, useState} from "react";
import {queryExpressPageForProp, sendContractNextBySg} from "qj-bbc-api";
import {Form} from 'antd-mobile';
import { get } from 'lodash-es';
import {updatePagesRefreshStore, getPagesRefreshStore} from '@brushes/utils';
import { getTaro } from '@brushes/utils';

export const useFillInExpress = ({params}: any) => {
  const [form] = Form.useForm();

  const [expressList, setExpressList] = useState([]);

  const [expressIndex, setExpressIndex] = useState(0);

  useEffect(() => {
    getExpressList()
  }, []);

  const getExpressList = async () => {
    try {
      const result = await queryExpressPageForProp();
      setExpressList(result.list);
    }catch (err) {
      console.log(err)
    }
  }

  const changeExpressIndex = (e: any) => {
    setExpressIndex(+e.detail.value)
  }

  const onFinish = async (formVal: any) => {
    const Taro = getTaro();
    const orderItem = JSON.parse(params.item);
    const expressItem = expressList[expressIndex];

    const {packageBillno} = formVal
    const {goodsList} = orderItem;

    try {
      await sendContractNextBySg({
        packageCode: goodsList[0].packageCode,
        expressCode: get(expressItem, 'expressCode'),
        expressName: get(expressItem, 'expressName'),
        packageBillno,
        contractEcurl:'',
        contractBillcode: goodsList[0].contractBillcode
      })

      Taro.navigateBack({
        delta: 1
      })

      let { fillInExpress = 0 } = getPagesRefreshStore();
      updatePagesRefreshStore({
        fillInExpress: ++fillInExpress
      });


    }catch (err) {
      console.log(err);
    }
  }

  return  {
    expressList,
    expressIndex,
    changeExpressIndex,
    onFinish,
    form
  }
}
