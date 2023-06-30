import axios from 'axios'


// 创建axios实例
const service = axios.create({
  // baseURL: '',// 所有的请求地址前缀部分
  timeout: 25000, // 请求超时时间(毫秒)
  withCredentials: true// 异步请求携带cookie
  // headers: {
  // 设置后端需要的传参类型
  // 'Content-Type': 'application/json',
  // 'token': x-auth-token',//一开始就要token
  // 'X-Requested-With': 'XMLHttpRequest',
  // },
})

service.interceptors.request.use((config: any) => {
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use((response: any) => {
  //判断code码
  return response.data
}, error => {
  return Promise.reject(error)
})

export default service