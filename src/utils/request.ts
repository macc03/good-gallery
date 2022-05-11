import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    return Promise.reject(error)
  }
)


export default service