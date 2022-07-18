import { defineStore } from 'pinia'
import requestService from '@/api/user'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    name: '测试用户'
  }),
  getters: {
    getName (state) {
      return state.name + '_aaa'
    }
  },
  actions: {
    // 获取用户信息
    async getUserInfo () {
      // return new Promise((resolve, reject) => {
      //   requestService.getUserInfo()
      //     .then((res) => {
      //       res.code === 0 ? resolve(res.data) : reject(res.msg)
      //     })
      //     .catch((err) => {
      //       reject(err)
      //     })
      // })
      try {
        const res = await requestService.getUserInfo()
        if (res.code === 0) {
          return res.data
        } else {
          return 'error'
        }
      } catch (e) {
        return 'error'
      }
    }
  }
})
