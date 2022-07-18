import Axios from '@/axios/axios'
import config from '@/config'

const http: Axios = new Axios({
  baseURL: config.ApiRoot,
  timeout: 10000 // request timeout
})

export default http
