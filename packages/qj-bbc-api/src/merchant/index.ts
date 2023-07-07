import { post } from '@brushes/optimize';

const MERCHANT = {
  QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER: '/web/rs/resourceGoods/queryResourceGoodsPagePaltForMerchantEnter.json', // 文章列表,
}

export const queryResourceGoodsPagePaltForMerchantEnter = (params = {}) => post(MERCHANT.QUERY_RESOURCE_GOODS_PAGE_PLAT_FOR_MERCHANT_ENTER, params);
