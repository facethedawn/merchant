import {memo} from "react";
import {antdMobile} from '@brushes/simulate-component';


const accountFormSubmitBtnJsx = () => {
  const {Button} = antdMobile;

  return (
    <Button
      block
      // shape='rounded'
      size='large'
      type='submit'
      style={{
        '--background-color': '#003ea5',
        '--text-color': '#FFFFFF',
        fontSize: '15px',
        width: '100%'
      }}
    >
      提交
    </Button>
  )
}


export const AccountFormSubmitBtn = memo(accountFormSubmitBtnJsx);
