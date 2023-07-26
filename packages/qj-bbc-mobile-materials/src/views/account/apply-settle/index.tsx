import React, {createContext, memo} from "react";
import {AccountTitle, FormApply} from "../components";
import {useApply} from 'qj-bbc-mobile-store';

export const applyContext = createContext<any>(null);

const applySettleJsx: React.FC = () => {
  const {
    form,
    onFinish,
    brandList,
    pickBrand,
    brand,
    classifyList,
    pickClassify,
    classify,
    chooseImg,
    logo,
    license,
    onChangeTime,
    startTime,
    endTime,
    provinceList,
    onChangeProvince,
    provinceCoe,
    cityList,
    onChangeCity,
    cityCoe,
    areaList,
    onChangeArea,
    areaCoe
  } = useApply();

  return (
    <applyContext.Provider
      value={{
        form,
        onFinish,
        brandList,
        pickBrand,
        brand,
        classifyList,
        pickClassify,
        classify,
        chooseImg,
        logo,
        license,
        onChangeTime,
        startTime,
        endTime,
        provinceList,
        onChangeProvince,
        provinceCoe,
        cityList,
        onChangeCity,
        cityCoe,
        areaList,
        onChangeArea,
        areaCoe
      }}
    >
      <AccountTitle title={'申请入驻'}/>
      <FormApply />
    </applyContext.Provider>
  )
}

export const ApplySettle = memo(applySettleJsx);
