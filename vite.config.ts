import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'
import ResolveType from '@vue/babel-plugin-resolve-type'

const babelPlugin = babel({
  extensions: ['.ts'],
  babelHelpers: 'bundled',
  plugins: [ResolveType],
})
// @ts-ignore
babelPlugin.enforce = 'pre'

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [babelPlugin],
})
