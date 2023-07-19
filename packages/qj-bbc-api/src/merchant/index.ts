import {post, get} from '@brushes/request';

const MERCHANT = {
  WARRANTY_LOGIN: 'web/ml/mlogin/warrantyLogin.json', //授权登录
  SEND_PHONE: 'web/ml/muser/sendPhone.json', // 发送手机验证码
  GET_PHONE_FOR_PLA_REG_SC: 'web/ml/muser/getPhoneForPlaRegSc.json', // 检测手机
  SAVE_USER_MERCHANT_BY_QUALITY: 'web/um/userMerchant/saveUserMerchantByQuality.json', // 注册
  WARRANTY_MERCHANT_LOGIN: 'web/ml/mlogin/warrantyMerchantLogin.json', // 登录
  QUERY_MERCHANT_BRAND_PAGE: 'web/rs/brand/queryMerchantBrandPage.json', // 申请入驻获取商品品牌
  SAVE_UM_USER_PHONE_NO_CODE_BY_WX: 'web/ml/muser/saveUmuserPhoneNoCodeByWX.json', // 手机号直接登录
  QUERY_CLASSTREE_PAGE: 'web/rs/classtree/queryClasstreePage.json', // 申请入驻获取商品类目
  QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER: 'web/rs/resourceGoods/queryResourceGoodsPagePaltForMerchantEnter.json', // 搜索商品
  QUERY_PM_SKU_PAGE: 'web/rs/sku/queryPmSkuPage.json', // 新增活动的商品商品列表， 当商品列表来用
  QUERY_CLASS_TREE_YZF: 'web/rs/classtree/queryClasstreeYzf.json', // 获取分类
  UPDATE_Audit_OR_CANNEL_FOR_PASS: 'web/rs/sku/updateAuditOrCannelForPass.json', // 上下架
  UPDATE_SKU_EDIT_PASS: '/web/rs/resourceGoods/updateSkuEditPass.json', // 调整库存
  QUERY_CONTRACT_PAGE_MEMBER_C_CODE:'/web/oc/contract/queryContractPageMemberCcode.json', // 订单列表
  GET_CONTRACT_BY_BILL_CODE: '/web/oc/contract/getContractByBillcode.json', // 订单详情
  QUERY_EXPRESS_PAGE_FOR_PROP: '/web/wl/express/queryExpressPageForProp.json', // 获取所有物流公司
  SEND_CONTRACT_NEXT_BY_SG: '/web/oc/contractEngine/sendContractNextBySg.json', // 物流信息提交
}

export const getContractByBillcode = (params = {}) => post(MERCHANT.GET_CONTRACT_BY_BILL_CODE, params);

export const sendContractNextBySg = (params = {}) => post(MERCHANT.SEND_CONTRACT_NEXT_BY_SG, params);

export const queryExpressPageForProp = (params = {}) => post(MERCHANT.QUERY_EXPRESS_PAGE_FOR_PROP, params);

export const queryContractPageMemberCcode = (params = {}) => post(MERCHANT.QUERY_CONTRACT_PAGE_MEMBER_C_CODE, params);

export const updateSkuEditPass = (params = {}) => post(MERCHANT.UPDATE_SKU_EDIT_PASS, params);

export const updateAuditOrCannelForPass = (params = {}) => get(MERCHANT.UPDATE_Audit_OR_CANNEL_FOR_PASS, params);

export const  queryClasstreeYzf = (params = {}) => get(MERCHANT.QUERY_CLASS_TREE_YZF, params);

export const queryPmSkuPage = (params = {}) => post(MERCHANT.QUERY_PM_SKU_PAGE, params);

export const warrantyMerchantLogin = (params = {}) => post(MERCHANT.WARRANTY_MERCHANT_LOGIN, params);

export const saveUserMerchantByQuality = (params = {}) => post(MERCHANT.SAVE_USER_MERCHANT_BY_QUALITY, params);

export const saveUmuserPhoneNoCodeByWX = (params = {}) => post(MERCHANT.SAVE_UM_USER_PHONE_NO_CODE_BY_WX, params);

export const getPhoneForPlaRegSc = (params = {}) => post(MERCHANT.GET_PHONE_FOR_PLA_REG_SC, params);

export const sendPhone = (params = {}) => get(MERCHANT.SEND_PHONE, params);

export const queryMerchantBrandPage = (params = {}) => post(MERCHANT.QUERY_MERCHANT_BRAND_PAGE, params);

export const queryClasstreePage = (params = {}) => post(MERCHANT.QUERY_CLASSTREE_PAGE, params);

export const warrantyLogin = (params = {}) => get(MERCHANT.WARRANTY_LOGIN, params);

export const queryResourceGoodsPagePaltForMerchantEnter = (params = {}) => post(MERCHANT.QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER, params);

