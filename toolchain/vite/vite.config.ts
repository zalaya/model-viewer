import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { lazyPlugins } from 'vite-plus'

export default {
  fmt: {
    ignorePatterns: ['node_modules/**', 'toolchain/**', 'dist/**'],
    semi: false,
    jsxSingleQuote: true,
    singleQuote: true,
    trailingComma: 'none'
  },
  lint: {
    ignorePatterns: ['node_modules/**', 'toolchain/**', 'dist/**']
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'source/')
    }
  },
  plugins: lazyPlugins(() => [react(), tailwindcss()])
}
