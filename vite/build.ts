// 分块打包优化
const build = {
  output: 'dist',
  target: 'es2019',
  brotliSize: false,
  chunkSizeWarningLimit: 2000,
  minify: 'terser',
  terserOptions: {
    compress: {
      //生产环境时移除console
      drop_console: true,
      drop_debugger: true,
    },
  },
  rollupOptions: {
    emptyOutDir: true, // 清空打包目录
    output: {
      manualChunks (id: string) { // 根据条件对依赖进行分块打包
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString()
        }
      }
    }
  }
}

export default build
