import {useEffect, useState} from "react";
import {queryClasstreePage} from 'qj-bbc-api';

export const usePickClassify = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(8)
    init();
  })

  const init = async () => {
    try {
      const result = await queryClasstreePage()

      console.log(16, result);
    } catch (err) {
      console.log(err)
    }
  }

  return {
    list,
    setList
  }
}
