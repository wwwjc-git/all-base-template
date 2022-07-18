/**
 * Used to package and output gzip. Note that this does not work properly in Vite, the specific reason is still being investigated
 * https://github.com/anncwb/vite-plugin-compression
 */
import type { PluginOption } from 'vite'
// @ts-ignore
import compressPlugin from 'vite-plugin-compression'

export function setupCompress(): PluginOption | PluginOption[] {
  // if (compressList.includes('gzip')) {
  //
  // }

  // if (compressList.includes('brotli')) {
  //   plugins.push(
  //     compressPlugin({
  //       ext: '.br',
  //       algorithm: 'brotliCompress',
  //       deleteOriginFile,
  //     }),
  //   )
  // }
  return compressPlugin({
    ext: '.gz',
    deleteOriginFile: false
  })
}
