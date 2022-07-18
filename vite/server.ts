// 配置本地server服务相关
const server = {
  https: false,
  host: true,
  port: 6600
  // proxy: {
  //   '/api': {
  //     target: 'http://www.baidu.com', // 接口基地址
  //     changeOrigin: true,
  //     rewrite: (path: string) => {
  //       return path.replace(/^\/api/, '');
  //     }
  //   }
  // }
}

export default server
