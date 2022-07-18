export default {
  // 标题
  Title: import.meta.env.VITE_TITLE,
  // API访问地址
  ApiRoot: import.meta.env.VITE_API_ROOT,
  // 前端页面部署后的访问路径 用作拼接/public/下资源使用
  BaseUrl: import.meta.env.VITE_BASE_URL
} as configType
