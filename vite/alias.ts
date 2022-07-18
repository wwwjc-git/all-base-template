// vite.config.ts定义别名操作
import * as path from 'path'
import { AliasOptions } from 'vite'

const alias: AliasOptions = {
  '@': path.resolve(__dirname, '../src')
}

export default alias
