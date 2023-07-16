import React, {memo} from "react";
import {useComponent} from '@brushes/simulate-component';
import {useMine} from '../../../../../../qj-bbc-mobile-store';

const mineListJsx: React.FC = () => {
  const {View, Image} = useComponent();

  const {config} = useMine()

  return (
    <View className={'mine-list'}>
      {
        config.map(item => {
          return <View className={'mine-list-item'} onClick={item.action}>
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
