const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
  // NEW pages should be added here i.g. if you need to create
  // contacts page you need add folder to src,
  // and add path and name to entry array
  const VENDORS_NAME = 'vendors';
  const entry = {
    index: ['./src/index/index.js'],
    'lesson-10': ['./src/lesson-10/lesson-10.js'],
    'lesson-12': ['./src/lesson-12/lesson-12.js'],
    'lesson-13': ['./src/lesson-13/lesson-13.js'],
    'lesson-14': ['./src/lesson-14/lesson-14.js'],
    'lesson-15': ['./src/lesson-15/lesson-15.js'],
    'lesson-16': ['./src/lesson-16/lesson-16.jsx'],
  };

  const plugins = Object.keys(entry).reduce((acc, name) => {
    acc.push(new HtmlWebpackPlugin({
      chunksSortMode: 'manual',
      title: `${name}`,
      template: `./src/${name}/${name}.html`,
      chunks: [VENDORS_NAME, name],
      filename: `./${name}.html`,
    }));
    acc.push(new ExtractTextPlugin({
      filename: `[name].css`,
      allChunks: false
    }));

    return acc;
  }, []);

  plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: VENDORS_NAME,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      'typeof window': JSON.stringify('object')
    })
  ]);

  entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

  return {
    entry,
    output: {
      filename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.js/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          ]
        },
        {
          test: /\.scss/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
          })
        },
        {

          /**
           * ASSET LOADER
           * Reference: https://github.com/webpack/file-loader
           * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
           * Rename the file using the asset hash
           * Pass along the updated reference to your code
           * You can add here any file extension you want to get copied to your output
           */
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file-loader?publicPath=./&[name].[ext]'
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?publicPath=./&[name].[ext]'
        }
      ]
    },
    plugins
  };
};

module.exports = baseConf;