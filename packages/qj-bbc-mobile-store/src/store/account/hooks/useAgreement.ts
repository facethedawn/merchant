import {jumpLink} from "../../../utils";
import {routerMap} from "../../../router-map";

export const useAgreement = () => {
  const goAgreement = () => {
    jumpLink(routerMap.agreement + '?a=1')
  }
  return {
    goAgreement
  }
}

