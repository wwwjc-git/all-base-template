// 针对环境变量进行类型声明

// eslint-disable-next-line
// / <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 环境变量的类型配置
interface ViteEnv {
  VITE_TITLE: string
  VITE_BASE_URL:string
  VITE_API_ROOT:string
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type ImportMetaEnv = ViteEnv

// 当前vite默认的环境变量的类型定义
interface ImportMeta {
  readonly env: ImportMetaEnv
}


