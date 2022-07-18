// 配置mockjs插件
import { viteMockServe } from 'vite-plugin-mock'
import { Plugin } from 'vite'

export function setupMockPlugin (isBuild: boolean): Plugin {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: !isBuild
  })
}
