import {useEffect, useState} from "react";
// import {queryDocListPage} from 'qj-bbc-api';


export const useTestStore = () => {
  const [info, setInfo] = useState('test store');
  useEffect(() => {
    // queryDocListPage().then(res => {
    //   console.log(9, res);
    // })
  })

  return {
    info,
    setInfo
  }
}
