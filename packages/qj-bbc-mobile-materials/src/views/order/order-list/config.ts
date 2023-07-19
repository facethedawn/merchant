export const config = [
  {
    label: '全部',
    value: '0',
  },
  {
    label: '待付款',
    value: '1',
  },
  {
    label: '待发货',
    value: '2',
  },
  {
    label: '已发货',
    value: '3',
  },
  {
    label: '已收货',
    value: '4',
  },
  {
    label: '交易成功',
    value: '5',
  },
  {
    label: '已取消',
    value: '-1',
  },
]


export const searchConfig  = [
  [
    {
      id: 0,
      param: 'contractBillcode',
      label: '订单号'
    },
    {
      id: 1,
      param: 'contractBbillcode',
      label: '批次号'
    }
  ],
]
