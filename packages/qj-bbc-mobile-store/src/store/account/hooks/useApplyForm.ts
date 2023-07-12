import {queryClasstreePage, queryMerchantBrandPage} from 'qj-bbc-api';
import {a} from './a';
import {useEffect, useState} from "react";
import {isNull, isEmpty, get} from "lodash-es";



export const useApplyForm = () => {
  const [classifyList, setClassifyList] = useState<any>([]);
  // const [classify, setClassify] = useState('');

  useEffect(() => {
    console.log(213)
    init()
    getBrand()
  }, [])

  const getLastClassTreeName = (obj:any): string => {
    if (isNull(obj.childList) || isEmpty(obj.childList)) {
      return obj.classtreeName;
    } else {
      return getLastClassTreeName(get(obj, ['childList', '0']));
    }
  }

  const init = async () => {
    try {
      const result = await queryClasstreePage()

      console.log(16, result);


    } catch (err) {
      console.log(58, err)
    } finally {
      const arr: any = [];
      a.forEach(obj => {
        const lastClassTreeName = getLastClassTreeName(obj);
        console.log(36, lastClassTreeName);
        arr.push(lastClassTreeName)
      });

      console.log(41, arr);
      setClassifyList(arr);
    }
  }


  const getBrand = async () => {
    try {
      const result = await queryMerchantBrandPage()

      console.log(51, result);
    }catch (err) {
      console.log(err);
    }
  }




  return {
    classifyList
  }
}
