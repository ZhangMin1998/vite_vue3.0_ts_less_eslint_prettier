import request from '@/utils/request'

// 用户登录
export function loginsys(param: object) {
  return request({
    url: '/login/oauth/token',
    method: 'post',
    data: param
  })
}