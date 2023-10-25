import { useMemo } from 'react';
// const baseUrl = process.env.REACT_APP_BASE_URL;
// const path = process.env.REACT_IMG_PATH || '';
import {getHost} from "qj-bbc-mobile-store";

export const useFullPath = (value: string) => {
  return useMemo(() => {
    // const isFull = /^(http|https):\/\//.test(value);
    // if (isFull) return value;
    // return baseUrl + path + value;
    if(value.indexOf('http')<0) return `${getHost()}${value}`
    return value
  }, [value]);
};
