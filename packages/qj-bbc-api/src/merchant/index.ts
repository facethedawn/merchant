import {post, get} from '@brushes/optimize';

const MERCHANT = {
  WARRANTY_LOGIN: 'web/ml/mlogin/warrantyLogin.json', //授权登录
  SEND_PHONE: '/web/ml/muser/sendPhone.json', // 发送手机验证码
  GET_PHONE_FOR_PLA_REG_SC: '/web/ml/muser/getPhoneForPlaRegSc.json', // 检测手机
  SAVE_USER_MERCHANT_BY_QUALITY: '/web/um/userMerchant/saveUserMerchantByQuality.json', // 注册
  QUERY_MERCHANT_BRAND_PAGE: '/web/rs/brand/queryMerchantBrandPage.json', // 申请入驻获取商品品牌
  SAVE_UM_USER_PHONE_NO_CODE_BY_WX: '/web/ml/muser/saveUmuserPhoneNoCodeByWX.json', // 手机号直接登录
  QUERY_CLASSTREE_PAGE: '/web/rs/classtree/queryClasstreePage.json', // 申请入驻获取商品类目
  QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER: '/web/cms/doclist/queryDoclistPage.json', // 文章列表,
}

export const saveUserMerchantByQuality = (params = {}) => post(MERCHANT.SAVE_USER_MERCHANT_BY_QUALITY, params);

export const saveUmuserPhoneNoCodeByWX = (params = {}) => post(MERCHANT.SAVE_UM_USER_PHONE_NO_CODE_BY_WX, params);

export const getPhoneForPlaRegSc = (params = {}) => post(MERCHANT.GET_PHONE_FOR_PLA_REG_SC, params);

export const sendPhone = (params = {}) => get(MERCHANT.SEND_PHONE, params);

export const queryMerchantBrandPage = (params = {}) => post(MERCHANT.QUERY_MERCHANT_BRAND_PAGE, params);

export const queryClasstreePage = (params = {}) => post(MERCHANT.QUERY_CLASSTREE_PAGE, params);

export const warrantyLogin = (params = {}) => get(MERCHANT.WARRANTY_LOGIN, params);

export const queryResourceGoodsPagePaltForMerchantEnter = (params = {}) => post(MERCHANT.QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER, params);
