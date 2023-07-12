import { getTaro } from '@brushes/utils';
const Taro = getTaro();

interface showModalType {
  title: string,
  icon: string,
  duration: number
}

// icon: "success" or "error" or "loading" or "none"
export const showToast = ({title, icon = 'success', duration = 2000}: showModalType) => {
  Taro.showToast({
    title,
    icon,
    duration
  })
}
