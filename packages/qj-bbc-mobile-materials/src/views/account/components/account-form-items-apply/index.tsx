import React, {memo} from "react";
import {useComponent, antdMobile} from '@brushes/simulate-component';
import {UpdateImg} from "../update-img";
import {PickAddress} from "../pick-address";
import {ValidityPeriod} from "../validity-period";
// import {mobileRex, checkPwd } from "../../../../utils";

const accountFormItemsApplyJsx:React.FC = () => {
  const {View} = useComponent();
  const {Form, Input} = antdMobile;

  return (
    <View>
      {/*商家名称*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'account1'}
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
          name={'account2'}
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
          name={'account3'}
          label={'商户logo上传'}
        >
          <View>
            <UpdateImg/>
          </View>
        </Form.Item>
      </View>

      {/*营业执照编号*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'account4'}
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
          name={'account5'}
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
          name={'account6'}
          label={'营业执照上传'}
        >
          <View>
            <UpdateImg/>
          </View>
        </Form.Item>
      </View>

      {/*营业范围*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'account7'}
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
          name={'account7'}
          label={'营业期限'}
        >
          <ValidityPeriod/>
        </Form.Item>
      </View>


      {/*企业所在地*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'account8'}
          label={'企业所在地'}
          rules={[
            {
              required: true,
              message: `企业所在地不能为空`
            },
          ]}
        >
          <PickAddress/>
        </Form.Item>
      </View>

      {/*企业详细地址*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'account9'}
          label={'企业详细地址'}
          rules={[
            {
              required: true,
              message: `企业详细地址不能为空`
            },
          ]}
        >
          <Input
            clearable
            placeholder={'请输入企业详细地址'}
          />
        </Form.Item>
      </View>

      {/*联系人名称*/}
      <View className={'accountFormApplyItem'}>
        <Form.Item
          name={'account10'}
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
          name={'account11'}
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
          name={'account12'}
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
          name={'account13'}
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
