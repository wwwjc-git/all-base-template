import http from '@/axios'

export default {
  // 登陆接口，等待store/user模块promise调用
  login (params: LoginReq) {
    return http.post<LoginRes>('/auth/credentials', {
      params
    })
  },
  // 获取用户信息接口，等待store/user模块promise调用
  getUserInfo () {
    return http.get<GetUserInfoRes>('/account/user')
  },
  // 登出接口，等待store/user模块promise调用
  logout () {
    return http.post('/auth/logout')
  },
  // 将当前用户从系统中删除接口，等待store/user模块promise调用
  deleteUser (userId: DeleteUserReq) {
    return http.delete('/account/user', {
      data: { userId }
    })
  }
}
