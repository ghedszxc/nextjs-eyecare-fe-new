import { defineConfig } from 'tsup'
import { sassPlugin } from 'esbuild-sass-plugin'
import svgr from 'esbuild-plugin-svgr'
import jsx from '@svgr/plugin-jsx'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  shims: true,
  splitting: false,
  treeshake: true,
  minify: false,
  target: 'es2017',
  external: ['react', 'react-dom'],
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      type: 'local-css',
    }),
    sassPlugin({
      filter: /\.scss$/,
      type: 'css',
    }),
    svgr({ svgo: false, plugins: [jsx] }),
  ],
  loader: {
    '.css': 'copy',
  },
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
})
