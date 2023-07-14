export const checkMobile = (_: any, value: string) => {
  if (/^1[3456789]\d{9}$/.test(value)) {
    return Promise.resolve()
  }

  return Promise.reject({ required: true, message: "请输入正确手机号" })
}

export const mobileRex = /^1[13456789]\d{9}$/;

export const checkPwd = (_: any, value: any) => {
  if (value.length > 5 && value.length < 13) {
    return Promise.resolve()
  }
  return Promise.reject(new Error(`请输入6-12位密码`));
}
