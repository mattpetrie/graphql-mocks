import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  dest: './lib/index.js',
}
