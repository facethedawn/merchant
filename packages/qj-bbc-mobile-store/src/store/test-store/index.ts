import {useState} from "react";


export const useTestStore = () => {
  const [info, setInfo] = useState('test store');

  return {
    info,
    setInfo
  }
}
