import {jumpLink} from "../../../utils";
import {routerMap} from "../../../router-map";
import {getroappConfigPageForUser} from 'qj-bbc-api';
import {useEffect, useState} from "react";

interface agreementType {
  page?: boolean
  proappConfigType?: string
}

export const useAgreement = ({page, proappConfigType}: agreementType = {}) => {
  const [data, setData] = useState('');

  useEffect(() => {
    if (page) {
      init()
    }
  }, []);

  const init = async () => {
    try {
      const result = await getroappConfigPageForUser({
        proappConfigType: proappConfigType
      })
      const {proappConfigText2} = result;
      setData(proappConfigText2);
    } catch (err) {
      console.log(err);
    }
  }


  const goAgreement = (val: '') => {
    jumpLink(routerMap.agreement + `?type=${val}`);
  }

  return {
    goAgreement,
    data
  }
}

