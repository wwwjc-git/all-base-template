// 公共接口返参类型
interface PublicResponse<T> {
  code: number,
  msg: string,
  data?: T
}
