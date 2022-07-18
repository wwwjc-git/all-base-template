// vite.config.ts使用的插件
import vue from '@vitejs/plugin-vue'
import { Plugin, PluginOption } from 'vite'
import { setupMockPlugin } from './mock'
import { setupElementPlus } from './element-plus'
import { setupVisualizer } from './visualizer'
import { setupCompress } from './compress'

export default function setupPlugins (isBuild: boolean, env: ImportMetaEnv) {
  const mockPlugin = setupMockPlugin(isBuild)
  const { AutoImport, Components, Icons, Inspect } = setupElementPlus()
  const visualizer = setupVisualizer()
  const compressPlugin = setupCompress() as Plugin
  const plugins: Plugin[] = [vue()]
  plugins.push(mockPlugin)
  plugins.push(AutoImport, Components, Icons, Inspect)
  plugins.push(visualizer)
  plugins.push(compressPlugin)

  return plugins
}
