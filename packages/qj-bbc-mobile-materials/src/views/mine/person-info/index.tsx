import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";

const personInfoJsx:React.FC = () => {
  const {View, Image} = useComponent();

  return (
    <View className={'person-info'}>
      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户编号</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户名称</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户简称</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item img'}>
          <View className={'l-part'}>商户LOGO</View>
          <View className={'r-part'}>
            <Image
              src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/arrow-down.png'
              mode='widthFix'
              className='img'
            />
          </View>
        </View>
      </View>

      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商品品牌</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户类目</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>联系人名称</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>联系人电话</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>联系人邮箱</View>
          <View className={'r-part'}>123123123123</View>
        </View>
      </View>

      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>客服电话</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业执照编号</View>
          <View className={'r-part'}></View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业执照地址</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item img'}>
          <View className={'l-part'}>营业执照图片</View>
          <View className={'r-part'}>
            <Image
              src='https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/arrow-down.png'
              mode='widthFix'
              className='img'
            />
          </View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业范围</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业期限</View>
          <View className={'r-part'}>123123123123</View>
        </View>
      </View>

      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>企业所在地</View>
          <View className={'r-part'}>123123123123</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>企业详细地址</View>
          <View className={'r-part'}>123123123123</View>
        </View>
      </View>
    </View>
  )
}

export const PersonInfo = memo(personInfoJsx);
