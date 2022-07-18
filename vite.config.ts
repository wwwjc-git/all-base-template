import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import setupPlugins from './vite/plugins'
import css from './vite/css'
import build from './vite/build'
import server from './vite/server'
import esbuild from './vite/esbuild'

// command 运行命令三种环境下 serve build build（可用作区分两种环境）
// mode 三种环境下 development sy production（可用作区分三种环境）
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build' // 是打包环境
  const root = process.cwd() // 根目录路径
  const env = loadEnv(mode, root) as unknown as ImportMetaEnv
  return {
    base: './',
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    },
    css,
    build,
    server,
    esbuild
  }
}
