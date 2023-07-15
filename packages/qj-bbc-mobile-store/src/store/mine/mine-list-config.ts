import {jumpLink} from "../../utils";
import {routerMap} from "../../router-map";


export const mineListConfig = [
  {
    label: '个人信息',
    icon: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/mine-board.png',
    action:() => {
      jumpLink(routerMap.personInfo);
    }
  },
  {
    label: '佣金查看',
    icon: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/mine-money.png',
    action:() => {
      jumpLink(routerMap.brokerageList);
    }
  },
  {
    label: '直播列表',
    icon: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/mine-live.png',
    action:() => {
      jumpLink(routerMap.liveList);
    }
  },
  {
    label: '修改密码',
    icon: 'https://nebular.oss-cn-shanghai.aliyuncs.com/BBC/merchant/mobile/img/mine-lock.png',
    action:() => {
      jumpLink(routerMap.changePwd);
    }
  }
]

