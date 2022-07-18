// login接口请求的参数类型
interface LoginReq {
  username: string,
  password: string,
  code: string
}

// login接口返回的数据类型
interface LoginRes {
  name: string,
  age: number,
  sex: string
}

// getUserInfo接口请求的参数类型
// getUserInfo接口返回的数据类型
interface GetUserInfoRes {
  name: string,
  phone: number,
  sex: string,
  age: number,
  dept: string
}

// deleteUser接口请求的参数类型
type DeleteUserReq = string
// deleteUser接口返回的参数类型
