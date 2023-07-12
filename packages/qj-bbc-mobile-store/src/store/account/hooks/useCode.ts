import {useEffect, useRef, useState} from "react";
import {taroMessage} from "@brushes/utils";
import {mobileRex} from "../../../utils";
import {getPhoneForPlaRegSc, sendPhone} from 'qj-bbc-api';

const seconds = 60;

export const useCode = ({form, type}: any) => {
  const [timeFlag, setTimeFlag] = useState(false);
  const [time, setTime] = useState<number>(seconds);
  const timeRef = useRef<any>();
  const [lock, setLock] = useState(false);

  const getMobile = async () => {
    if (lock) return;
    const mobile = form.getFieldValue('userPhone');

    if (!mobile) {
      taroMessage('请填写手机号', 'error');
      return;
    }

    const pass = type === 'mobileLogin'? true:mobileRex.test(mobile);

    if (!pass) {
      taroMessage('请填写正确的手机号', 'error');
      return;
    } else {
      setLock(true);
      try {
        const phone = {
          userPhone: mobile
        }
        if(type === 'reg') {
          const checkResult = await getPhoneForPlaRegSc(phone);
          console.log(37, checkResult);
          if(!checkResult.success) {
            taroMessage(checkResult.msg, 'error');
            return
          }
        }

        const result = await sendPhone(phone)
        console.log(26, result);
        setTimeFlag(true)
        setTime(seconds);
      } catch (err) {
        console.log(err);
      } finally {
        setLock(false);
      }
    }
  }

  useEffect(() => {
    if (time && time !== 0)
      timeRef.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    if (time === 0) setTimeFlag(false);
    return () => {
      clearTimeout(timeRef.current);
    }
  }, [time]);


  return {
    timeFlag,
    time,
    getMobile
  }
}
