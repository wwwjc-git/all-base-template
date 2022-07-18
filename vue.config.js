/**
 * 全局配置文件。详细配置请参考： https://github.com/vuejs/vue-cli/blob/dev/docs/config.md
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const defaultConfig = require('./src/config.js')
const projectTitle = defaultConfig.Title || 'projectTitle' // 标题

const CompressionPlugin = require('compression-webpack-plugin') // gzip压缩插件
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')
const currentENV = process.env.NODE_ENV // 当前运行环境
module.exports = {
  productionSourceMap: false, // 关闭生产环境的 source map
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: 8080,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null // string | Object
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/styles/variables.less')]
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    if (currentENV !== 'development') {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch')
      // 移除 preload 插件，避免加载多余的资源
      config.plugins.delete('preload')
      config.optimization.minimize(true)
      config.optimization.splitChunks({
        chunks: 'all', // 表明选择哪些 chunk 进行优化。通用设置，可选值：all/async/initial。设置为 all 意味着 chunk 可以在异步和非异步 chunk 之间共享。
        minSize: 20000, // 允许新拆出 chunk 的最小体积
        maxAsyncRequests: 10, // 每个异步加载模块最多能被拆分的数量
        maxInitialRequests: 10, // 每个入口和它的同步依赖最多能被拆分的数量
        enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值并忽略其他限制
        cacheGroups: {
          libs: { // 第三方库
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/, // 请注意'[\\/]'的用法，是具有跨平台兼容性的路径分隔符
            priority: 10, // 优先级，执行顺序就是权重从高到低
            chunks: 'initial' // 只打包最初依赖的第三方
          },
          elementUI: { // 把 elementUI 单独分包
            name: 'chunk-elementUI',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 20 // 权重必须比 libs 大，不然会被打包进 libs 里
          },
          commons: {
            name: 'chunk-commons',
            minChunks: 2, // 拆分前，这个模块至少被不同 chunk 引用的次数
            priority: 0,
            reuseExistingChunk: true
          },
          svgIcon: {
            name: 'chunk-svgIcon',
            // 函数匹配示例，把 svg 单独拆出来
            test (module) {
              // `module.resource` 是文件的绝对路径
              // 用`path.sep` 代替 / or \，以便跨平台兼容
              // const path = require('path') // path 一般会在配置文件引入，此处只是说明 path 的来源，实际并不用加上
              return (
                module.resource &&
                module.resource.endsWith('.svg') &&
                module.resource.includes(`${path.sep}icons${path.sep}`)
              )
            },
            priority: 30
          }
        }
      })
      config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin())
      config.plugin('compressionPlugin').use(new CompressionPlugin({
        test: /\.(js|css|html)$/, // 匹配文件名
        threshold: 10240,
        filename: info => {
          return `${info.path}.gz${info.query}`
        },
        algorithm: 'gzip',
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false // 删除原文件
      }))
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: false, // 默认false，设置为true, 则会删除所有console.* 相关的代码。
              pure_funcs: ['console.log'] // 单纯禁用console.log
            }
          }
        })
      ]
    }
  },
  configureWebpack: config => {
    config.name = projectTitle
  },
  lintOnSave: true
}
