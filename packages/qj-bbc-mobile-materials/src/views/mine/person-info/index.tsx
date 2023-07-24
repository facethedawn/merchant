import React, {memo} from "react";
import {useComponent} from "@brushes/simulate-component";
import {usePersonInfo} from 'qj-bbc-mobile-store';
import {getHost} from "qj-bbc-mobile-store";

const personInfoJsx:React.FC = () => {
  const {View, Image} = useComponent();

  const {info, handleStupidArr} = usePersonInfo();

  const {
    userinfoCode,
    userinfoCompname,
    companyShortname,
    userinfoLogo,
    userinfoCertUrl,
    userinfoCon,
    userinfoConPhone,
    umUserinfoQuaDomainList,
    userinfoCertNo,
    provinceName,
    cityName,
    areaName,
    companyAddress,
    userinfoScope,
  } = info;


  return (
    <View className={'person-info'}>
      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户编号</View>
          <View className={'r-part'}>{userinfoCode}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户名称</View>
          <View className={'r-part'}>{userinfoCompname}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户简称</View>
          <View className={'r-part'}>{companyShortname}</View>
        </View>
        <View className={'person-info-item img'}>
          <View className={'l-part'}>商户LOGO</View>
          <View className={'r-part'}>
            <Image
              src={`${getHost()}${userinfoLogo}`}
              mode='widthFix'
              className='img'
            />
          </View>
        </View>
      </View>

      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商品品牌</View>
          <View className={'r-part'}>{handleStupidArr(umUserinfoQuaDomainList, 'brandName')}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>商户类目</View>
          <View className={'r-part'}>{handleStupidArr(umUserinfoQuaDomainList, 'classtreeName')}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>联系人名称</View>
          <View className={'r-part'}>{userinfoCon}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>联系人电话</View>
          <View className={'r-part'}>{userinfoConPhone}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>联系人邮箱</View>
          <View className={'r-part'}>{handleStupidArr(umUserinfoQuaDomainList, 'userinfoConEmail')}</View>
        </View>
      </View>

      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>客服电话</View>
          <View className={'r-part'}>{handleStupidArr(umUserinfoQuaDomainList, 'userinfoConEmail')}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业执照编号</View>
          <View className={'r-part'}>{userinfoCertNo}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业执照地址</View>
          <View className={'r-part'}>{companyAddress}</View>
        </View>
        <View className={'person-info-item img'}>
          <View className={'l-part'}>营业执照图片</View>
          <View className={'r-part'}>
            <Image
              src={`${getHost()}${userinfoCertUrl}`}
              mode='widthFix'
              className='img'
            />
          </View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业范围</View>
          <View className={'r-part'}>{userinfoScope}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>营业期限</View>
          <View className={'r-part'}>
            {handleStupidArr(umUserinfoQuaDomainList, 'shopdeSdate')}
            -
            {handleStupidArr(umUserinfoQuaDomainList, 'shopdeEdate')}
          </View>
        </View>
      </View>

      <View className={'person-info-wrap'}>
        <View className={'person-info-item'}>
          <View className={'l-part'}>企业所在地</View>
          <View className={'r-part'}>{provinceName + cityName + areaName}</View>
        </View>
        <View className={'person-info-item'}>
          <View className={'l-part'}>企业详细地址</View>
          <View className={'r-part'}>{companyAddress}</View>
        </View>
      </View>
    </View>
  )
}

export const PersonInfo = memo(personInfoJsx);
