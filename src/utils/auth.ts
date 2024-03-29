/**
 * 用户登录相关
 */
import store from './localstore'

const UserKey = 'auth_user'
const UserIdKey = 'auth_user_id'
const TokenKey = 'auth_token'
const HomeKey = 'home_path'

export function isAuthenticated () {
  return !!store.getItem(UserKey)
}

export function getUserId () {
  return store.getItem(UserIdKey, false)
}

export function setUserId (userId: string|number) {
  store.setItem(UserIdKey, userId)
}

export function setUser (user: any) {
  store.setItem(UserKey, user)
}

export function getUser () {
  return store.getItem(UserKey)
}

export function getToken () {
  return store.getItem(TokenKey, false)
}

export function setToken (token: string) {
  store.setItem(TokenKey, token)
}

export function clearAuth () {
  store.removeItem(UserKey)
  store.removeItem(TokenKey)
  store.removeItem(HomeKey)
  store.removeItem(UserIdKey)
}
