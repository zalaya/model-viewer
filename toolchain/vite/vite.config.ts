import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { lazyPlugins } from 'vite-plus'

export default {
  fmt: {
    semi: false,
    jsxSingleQuote: true,
    singleQuote: true,
    trailingComma: 'none',
    sortImports: {
      internalPattern: ['@/'],
      newlinesBetween: false
    }
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'source/')
    }
  },
  plugins: lazyPlugins(() => [react(), tailwindcss()])
}
