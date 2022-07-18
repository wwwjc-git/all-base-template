import axios, { AxiosRequestConfig } from 'axios'
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'

export default class Axios {
  public instance
  constructor (config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  // request请求
  public request<T, D = PublicResponse<T>> (config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // get请求
  public async get<T, D = PublicResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.get<D>(url, config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // delete请求
  public delete<T, D = PublicResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.delete<D>(url, config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // delete请求
  public head<T, D = PublicResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.head<D>(url, config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // post请求
  public post<T, D = PublicResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.post<D>(url, data, config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // put请求
  public put<T, D = PublicResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.put<D>(url, data, config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // post请求
  public patch<T, D = PublicResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.patch<D>(url, data, config)
        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    })
  }

  // 拦截器
  private interceptors () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  // 请求拦截器
  private interceptorsRequest () {
    this.instance.interceptors.request.use(config => {
      const token = getToken()
      if (token && config && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }, error => {
      Promise.reject(error)
    })
  }
  // 响应拦截器
  private interceptorsResponse () {
    this.instance.interceptors.response.use(
      response => response,
      /**
       * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
       * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
       */
      //  const res = response.data;
      //     if (res.code !== 20000) {
      //       Message({
      //         message: res.message,
      //         type: 'error',
      //         duration: 5 * 1000
      //       });
      //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //           confirmButtonText: '重新登录',
      //           cancelButtonText: '取消',
      //           type: 'warning'
      //         }).then(() => {
      //           store.dispatch('FedLogOut').then(() => {
      //             location.reload();// 为了重新实例化vue-router对象 避免bug
      //           });
      //         })
      //       }
      //       return Promise.reject('error');
      //     } else {
      //       return response.data;
      //     }
      error => {
        if (error.response.status !== 401) {
          const res = error.response.data
          let message = error.message
          if (res.responseStatus && res.responseStatus.message) {
            message = res.responseStatus.message
          }
          ElMessage({
            message: message,
            type: 'error',
            showClose: true,
            duration: 5 * 1000
          })
        }
        return Promise.reject(error)
      })
  }
}
