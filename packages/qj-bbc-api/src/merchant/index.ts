import {post, get} from '@brushes/optimize';

const MERCHANT = {
  SEND_PHONE: '/web/ml/muser/sendPhone.json', // 发送手机验证码
  GET_PHONE_FOR_PLA_REG_SC: '/web/ml/muser/getPhoneForPlaRegSc.json', // 检测手机
  QUERY_MERCHANT_BRAND_PAGE: '/web/rs/brand/queryMerchantBrandPage.json', // 申请入驻获取商品品牌
  QUERY_CLASSTREE_PAGE: '/web/rs/classtree/queryClasstreePage.json', // 申请入驻获取商品类目
  WARRANTY_LOGIN: 'web/ml/mlogin/warrantyLogin.json', //登录
  QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER: '/web/cms/doclist/queryDoclistPage.json', // 文章列表,
}

export const getPhoneForPlaRegSc = (params = {}) => post(MERCHANT.GET_PHONE_FOR_PLA_REG_SC, params);

export const sendPhone = (params = {}) => get(MERCHANT.SEND_PHONE, params);

export const queryMerchantBrandPage = (params = {}) => post(MERCHANT.QUERY_MERCHANT_BRAND_PAGE, params);

export const queryClasstreePage = (params = {}) => post(MERCHANT.QUERY_CLASSTREE_PAGE, params);

export const warrantyLogin = (params = {}) => get(MERCHANT.WARRANTY_LOGIN, params);

export const queryResourceGoodsPagePaltForMerchantEnter = (params = {}) => post(MERCHANT.QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER, params);
