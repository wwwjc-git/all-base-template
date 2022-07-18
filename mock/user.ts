// sy.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/account/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'success',
        data: {
          name: 'xiaox',
          phone: 15355407777,
          sex: '男',
          age: 14,
          dept: '研发部'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      msg: 'success',
      data: {
        name: 'vben'
      }
    }
  }
] as MockMethod[]
