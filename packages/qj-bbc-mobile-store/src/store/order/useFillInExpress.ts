
import {useEffect, useState} from "react";
import {queryExpressPageForProp, sendContractNextBySg} from "qj-bbc-api";
import {Form} from 'antd-mobile';
import { get } from 'lodash-es';

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
    const orderItem = JSON.parse(params.item);
    const expressItem = expressList[expressIndex];

    const {packageBillno} = formVal
    const {goodsList} = orderItem;

    try {
      const result = await sendContractNextBySg({
        packageCode: goodsList[0].packageCode,
        expressCode: get(expressItem, 'expressCode'),
        expressName: get(expressItem, 'expressName'),
        packageBillno,
        contractEcurl:'',
        contractBillcode: goodsList[0].contractBillcode
      })

      console.log(48, result);
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
