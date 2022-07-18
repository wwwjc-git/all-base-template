/**
 * 引用环境变量配置的变量
 */
module.exports = {
  // 标题
  Title: 'baseTemplate',
  /**
   * Api 根目录
   */
  ApiRoot: process.env.VUE_APP_API_ROOT,
  // 前端页面部署后的访问路径 用作拼接/public/下资源使用
  BaseUrl: process.env.VUE_APP_BASE_URL
}
