const {
  createConfig,

  // Feature blocks
  addPlugins,
  defineConstants,
  entryPoint,
  env,
  group,
  performance,
  setOutput,
  sourceMaps,

  // Shorthand setters
  babel,
  css,
  devServer,
  extractText,
  uglify
} = require('webpack-blocks')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const developmentConfig = () => group([
  sourceMaps()
])

const productionConfig = () => group([
  extractText(),
  uglify(),
  addPlugins([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ])
])

module.exports = createConfig([
  babel(),
  css.modules(),
  addPlugins([
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
  }),
  env('development', [
    entryPoint('./src/index.dev.js'),
    developmentConfig()
  ]),
  env('production', [
    entryPoint('./src/index.js'),
    setOutput('./build/bundle.js'),
    productionConfig()
  ])
])
