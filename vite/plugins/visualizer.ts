// 打包之后会在根目录输出一个stats.html各个包的体积的页面
import { visualizer } from 'rollup-plugin-visualizer'

export function setupVisualizer () {
  return visualizer()
}
