import {useState} from "react";

export const useBrokerageList = () => {
  const [coe, setCoe] = useState(0);

  const changeTab = (index) => {
    setCoe(index);
  }

  return {
    coe,
    changeTab
  }
}
