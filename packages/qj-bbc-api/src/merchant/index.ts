import {post, get} from '@brushes/request';

const MERCHANT = {
  WARRANTY_LOGIN: '/web/ml/mlogin/warrantyLogin.json', //授权登录
  SEND_PHONE: '/web/ml/muser/sendPhone.json', // 发送手机验证码
  GET_PHONE_FOR_PLA_REG_SC: '/web/ml/muser/getPhoneForPlaRegSc.json', // 检测手机
  SAVE_USER_MERCHANT_BY_QUALITY: '/web/um/userMerchant/saveUserMerchantByQuality.json', // 注册
  WARRANTY_MERCHANT_LOGIN: '/web/ml/mlogin/warrantyMerchantLogin.json', // 登录
  QUERY_BRAND_PAGE: '/web/rs/brand/queryMerchantBrandPage.json', // 申请入驻获取商品品牌
  QUERY_CLASSTREE_PAGE: '/web/rs/classtree/queryClasstreePage.json', // 申请入驻获取商品类目
  SAVE_UM_USER_PHONE_NO_CODE_BY_WX: '/web/ml/muser/saveUmuserPhoneNoCodeByWX.json', // 手机号直接登录
  QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER: '/web/rs/resourceGoods/queryResourceGoodsPagePaltForMerchantEnter.json', // 搜索商品
  QUERY_PM_SKU_PAGE: '/web/rs/sku/queryPmSkuPage.json', // 新增活动的商品商品列表， 当商品列表来用
  QUERY_CLASS_TREE_YZF: '/web/rs/classtree/queryClasstreeYzf.json', // 获取分类
  UPDATE_Audit_OR_CANNEL_FOR_PASS: '/web/rs/sku/updateAuditOrCannelForPass.json', // 上下架
  UPDATE_SKU_EDIT_PASS: '/web/rs/resourceGoods/updateSkuEditPass.json', // 调整库存
  QUERY_CONTRACT_PAGE_MEMBER_C_CODE:'/web/oc/contract/queryContractPageMemberCcode.json', // 订单列表
  GET_CONTRACT_BY_BILL_CODE: '/web/oc/contract/getContractByBillcode.json', // 订单详情
  QUERY_EXPRESS_PAGE_FOR_PROP: '/web/wl/express/queryExpressPageForProp.json', // 获取所有物流公司
  SEND_CONTRACT_NEXT_BY_SG: '/web/oc/contractEngine/sendContractNextBySg.json', // 物流信息提交
  QUERY_BY_MEMBER_C_CODE_MERCHANT: '/web/oc/refund/queryByMemberCcodeMerchant.json', //退单列表
  LOGIN_INFO: '/web/ml/mlogin/logininfo.json', // login
  GET_USER_SERVICE_INFO: '/web/um/userservice/getUserserviceInfo.json', // 商户信息
  QUERY_USER_INFO_DETAIL: '/web/um/userserviceinfo/queryUserinfoDetail.json', // 商户详细信息
  QUERY_INFUENCER_AND_CHILD: '/web/inf/infuencer/queryInfuencerAndChild.json', // 直播列表
  D_PRICE_CONF_TYPE: '/web/pte/dpriceConf/queryDpriceConfPageForMerchant.json', //佣金-商家规则
  QUERY_PROVINCE_PAGE: '/web/bs/province/queryProvincePage.json', // 获取省code
  QUERY_AREA_PAGE: '/web/bs/area/queryAreaPage.json', // 获取市code
  QUERY_ROAD_PAGE: '/web/bs/road/queryRoadPage.json', //获取区code
  SAVE_UPDATE_USER_INFO_APPLY: '/web/um/userInfoAuth/saveUpdateUserinfoapply.json', // 申请入驻
  QUERY_USER_APPLY_PAGE: '/web/um/userInfoAuth/queryUserApplyPage.json', // 检测商家状态
  VERIFICATION_REFUND_MERCHANT: '/web/oc/refund/verificationRefundMerchant.json', // 售后-审核通过第一步
  SUPPLIER_OC_AUDIT: '/web/oc/refund/supplierOcAudit.json', // 售后-审核通过第二步
  REFUSE_APPLICATION: '/web/oc/refund/refuseApplication.json', // 售后-审核拒绝
  UPDATE_UM_USER_PW: '/web/ml/muser/updateUmuserPw.json', // 修改密码
  UPDATE_CONTRACT_STATE_BUI_MAT: '/web/oc/contract/updateContractStateBuiMat.json', // 取消订单
  GET_SETS_UP_DIS_UTIL: '/web/pm/promotion/getSetsupDisUtil.json', // 获取太阳码第一步
  LOGIN_MINI_CODE_BY_TWO_BUS: '/web/ml/mlogin/loginMiniCodeByTwoBus.json', // 获取太阳码第二步
}

export const loginMiniCodeByTwoBus = (params = {}) => post(MERCHANT.LOGIN_MINI_CODE_BY_TWO_BUS, params);

export const getSetsupDisUtil = (params = {}) => post(MERCHANT.GET_SETS_UP_DIS_UTIL, params);

export const updateContractStateBuiMat = (params = {}) => post(MERCHANT.UPDATE_CONTRACT_STATE_BUI_MAT, params);

export const updateUmuserPw = (params = {}) => post(MERCHANT.UPDATE_UM_USER_PW, params);

export const refuseApplication = (params = {}) => post(MERCHANT.REFUSE_APPLICATION, params);

export const supplierOcAudit = (params = {}) => post(MERCHANT.SUPPLIER_OC_AUDIT, params);

export const verificationRefundMerchant = (params = {}) => post(MERCHANT.VERIFICATION_REFUND_MERCHANT, params);

export const queryUserApplyPage = (params = {}) => get(MERCHANT.QUERY_USER_APPLY_PAGE, params);

export const saveUpdateUserinfoapply = (params = {}) => post(MERCHANT.SAVE_UPDATE_USER_INFO_APPLY, params);

export const queryRoadPage = (params = {}) => post(MERCHANT.QUERY_ROAD_PAGE, params);

export const queryAreaPage = (params = {}) => post(MERCHANT.QUERY_AREA_PAGE, params);

export const queryProvincePage = (params = {}) => post(MERCHANT.QUERY_PROVINCE_PAGE, params);

export const queryUserinfoDetail = (params = {}) => get(MERCHANT.QUERY_USER_INFO_DETAIL, params);

export const queryDpriceConfPageForMerchant = (params = {}) => get(MERCHANT.D_PRICE_CONF_TYPE, params);

export const queryInfuencerAndChild = (params = {}) => post(MERCHANT.QUERY_INFUENCER_AND_CHILD, params);

export const logininfo = (params = {}) => post(MERCHANT.LOGIN_INFO, params);

export const getUserserviceInfo = (params ={}) => post(MERCHANT.GET_USER_SERVICE_INFO, params);

export const queryByMemberCcodeMerchant = (params = {}) => post(MERCHANT.QUERY_BY_MEMBER_C_CODE_MERCHANT, params);

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

export const queryBrandPage = (params = {}) => post(MERCHANT.QUERY_BRAND_PAGE, params);

export const queryClasstreePage = (params = {}) => post(MERCHANT.QUERY_CLASSTREE_PAGE, params);

export const warrantyLogin = (params = {}) => get(MERCHANT.WARRANTY_LOGIN, params);

export const queryResourceGoodsPagePaltForMerchantEnter = (params = {}) => post(MERCHANT.QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER, params);

