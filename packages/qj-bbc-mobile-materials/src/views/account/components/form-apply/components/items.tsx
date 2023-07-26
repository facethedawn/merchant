import React, {memo, useContext, useState} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {UpdateImg} from "./update-img";
import {ValidityPeriod} from "./validity-period";
import {PickBrand} from "./pick-brand";
// import {mobileRex, checkPwd } from "../../../../utils";
import {applyContext} from '../../../apply-settle';
import {PickProvince} from "./pick-province";
import {PickCity} from "./pick-city";
import {PickArea} from "./pick-area";

const accountFormItemsApplyJsx: React.FC<any> = ({}) => {
  const {View} = useComponent();
  const {Form, Input} = antdMobile;
  const [brandShow, setBrandShow] = useState(false);
  const [classifyShow, setClassifyShow] = useState(false);
  const {
    brandList,
    pickBrand,
    brand,
    classifyList,
    pickClassify,
    classify,
    chooseImg,
    logo,
    license,
    onChangeTime,
    startTime,
    endTime,
  } = useContext(applyContext);


  return (
    <View>
      {/*商家名称*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoCompname'}
          label={'商家名称'}
          rules={[
            {
              required: true,
              message: `商家名称不能为空`
            },
          ]}
        >
          <Input
            clearable
            placeholder={'请输入商家名称'}
          />
        </Form.Item>
      </View>

      {/*商家简称*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'companyShortname'}
          label={'商家简称'}
        >
          <Input
            clearable
            placeholder={'请输入商家简称'}
          />
        </Form.Item>
      </View>

      {/*商户logo上传*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'logoUpload'}
          label={'商户logo上传'}
        >
          <View>
            <UpdateImg handle={chooseImg.bind(null, 'logo')} img={logo} />
          </View>
        </Form.Item>
      </View>

      {/*营业执照编号*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoCertNo'}
          label={'营业执照编号'}
        >
          <Input
            clearable
            placeholder={'请输入营业执照编号'}
          />
        </Form.Item>
      </View>

      {/*营业执照地址*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'companyAddress'}
          label={'营业执照地址'}
        >
          <Input
            clearable
            placeholder={'请输入营业执照地址'}
          />
        </Form.Item>
      </View>

      {/*营业执照上传*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoCertUrl'}
          label={'营业执照上传'}
        >
          <View>
            <UpdateImg handle={chooseImg.bind(null, 'license')} img={license} />
          </View>
        </Form.Item>
      </View>

      {/*营业范围*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoScope'}
          label={'营业范围'}
        >
          <Input
            clearable
            placeholder={'请输入营业范围'}
          />
        </Form.Item>
      </View>

      {/*营业期限*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'date'}
          label={'营业期限'}
        >
          <ValidityPeriod start={startTime} end={endTime} onChange={onChangeTime}/>
        </Form.Item>
      </View>


      {/*企业所在省*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'province'}
          label={'企业所在省'}
          rules={[
            {
              required: true,
              message: `企业所在省不能为空`
            },
          ]}
        >
          <PickProvince/>
        </Form.Item>
      </View>

      {/*企业所在市*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'city'}
          label={'企业所在市'}
          rules={[
            {
              required: true,
              message: `企业所在市不能为空`
            },
          ]}
        >
          <PickCity />
        </Form.Item>
      </View>

      {/*企业所在区*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'area'}
          label={'企业所在区'}
          rules={[
            {
              required: true,
              message: `企业所在区不能为空`
            },
          ]}
        >
          <PickArea />
        </Form.Item>
      </View>

      {/*企业详细地址*/}
      {/*<View className={'accountFormApplyItem'}>*/}
      {/*  <Form.Item*/}
      {/*    name={'address'}*/}
      {/*    label={'企业详细地址'}*/}
      {/*    rules={[*/}
      {/*      {*/}
      {/*        required: true,*/}
      {/*        message: `企业详细地址不能为空`*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*  >*/}
      {/*    <Input*/}
      {/*      clearable*/}
      {/*      placeholder={'请输入企业详细地址'}*/}
      {/*    />*/}
      {/*  </Form.Item>*/}
      {/*</View>*/}

      {/*商品品牌*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'brand'}
          label={'商品品牌'}
          rules={[
            {
              required: true,
              message: `商品品牌不能为空`
            },
          ]}
        >
          <PickBrand
            state={brandShow}
            arr={brandList}
            setState={setBrandShow}
            onChange={pickBrand}
            showArr={brand}
          />
        </Form.Item>
      </View>

      {/*类目品牌*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'classify'}
          label={'商品类目'}
          rules={[
            {
              required: true,
              message: `商品类目不能为空`
            },
          ]}
        >
          <PickBrand
            state={classifyShow}
            arr={classifyList}
            setState={setClassifyShow}
            onChange={pickClassify}
            showArr={classify}
          />
        </Form.Item>
      </View>

      {/*联系人名称*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoCon'}
          label={'联系人名称'}
          rules={[
            {
              required: true,
              message: `联系人名称不能为空`
            },
          ]}
        >
          <Input
            clearable
            placeholder={'请输入联系人名称'}
          />
        </Form.Item>
      </View>

      {/*联系人电话*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoConPhone'}
          label={'联系人电话'}
          rules={[
            {
              required: true,
              message: `联系人电话不能为空`
            },
          ]}
        >
          <Input
            clearable
            placeholder={'请输入联系人电话'}
          />
        </Form.Item>
      </View>

      {/*联系人邮箱*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'userinfoConEmail'}
          label={'联系人邮箱'}
        >
          <Input
            clearable
            placeholder={'请输入联系人邮箱'}
          />
        </Form.Item>
      </View>

      {/*客服电话*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'servicePhone'}
          label={'客服电话'}
          rules={[
            {
              required: true,
              message: `客服电话不能为空`
            },
          ]}
        >
          <Input
            clearable
            placeholder={'请输入客服电话'}
          />
        </Form.Item>
      </View>
    </View>
  )
}

export const AccountFormItemsApply = memo(accountFormItemsApplyJsx);
