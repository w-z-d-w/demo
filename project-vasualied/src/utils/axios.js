//请求工具类
import axios from 'axios'

// 创建axios实例
let service =  axios.create({
  baseURL: 'http://localhost:3001', // api的base_url
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
   /**
    * code:200,接口正常返回;5001:非法的token; 5002:其他客户端登录了; 5004:Token 过期了;
    */
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 5001 || res.code === 5002 || res.code === 5004) {
		  console.log("5001:非法的token; 5002:其他客户端登录了; 5004:Token 过期了",res.code)
      }
      return Promise.reject('error')
    } else { // res.code === 200,正常返回数据
        return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
