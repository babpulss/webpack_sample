const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Handlebars = require('handlebars')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
require('./config')


module.exports = {
  resolve: {
    alias: {
      'ko_css': path.resolve(__dirname, 'src', 'css'),
      '@': path.resolve(__dirname, 'src', 'js'),
    },
    extensions: ['.ts', '.js', '.css', '.scss']
  },
  mode: 'production',
  entry: {
    tsapp: './src/js/tsapp.ts', 
    app2: './src/js/app2.js',
    handle: './src/js/app.js',
  },
  output: {
    clean: true,
    filename: 'static/[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/[name].[ext]',
    library: "web"
  },
  devServer: {
    port: 3000,
    watchFiles: ['**/*.html', '**/*.hbs']
  },
  module: {
    rules: [
      {
        test: /\.(html|hbs)$/,
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            let result;

            try {
              result = Handlebars.compile(content)({
                first: 'hello', second: 'world', name: 'kotlin'
              });
            } catch (err) {
              loaderContext.emitError(err);
              return content;
            }

            return result;
          }
        }
      },
      {
        test: /\.(png|jpg|gif)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 200
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/js/move/*.*', to: './move/[name].[ext]'},
        { from: './src/js/move//move1/*.*', to: './move/move1/[name].[ext]'}
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'view/index.html',
      template: './index.html',
      chunks: ['tsapp']
    }),
    new HtmlWebpackPlugin({
      filename: 'view/index2.html',
      template: './index2.html',
      chunks: ['app2']
    }),
    new HtmlWebpackPlugin({
      filename: 'hb.html',
      template: './hb.hbs',
      chunks: ['app']
    }),
  ]
}