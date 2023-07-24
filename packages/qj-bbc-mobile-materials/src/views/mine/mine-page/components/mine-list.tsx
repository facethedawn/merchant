import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';

const mineListJsx: React.FC<any> = ({config}) => {
  const {View, Image} = useComponent();


  return (
    <View className={'mine-list'}>
      {
        config.map((item: any, index: number) => {
          return <View className={'mine-list-item'} onClick={item.action} key={index}>
            <View className={'l-part'}>
              <Image
                src={item.icon}
                mode='widthFix'
                className='icon'
              />
              <View className='text'>{item.label}</View>
            </View>
            <Image
              src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/arrow-right.png'
              mode='widthFix'
              className='r-part'
            />
          </View>
        })
      }
    </View>
  )
}


export const MineList = memo(mineListJsx);
