const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

// const path = require('path')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }

// const webpack = require('webpack');

// const path = require('path')

// const config = {
//   entry: {
//     index: ['./src/index.js']
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js'
//   },
//   externals: {
//     react: {
//       root: 'React',
//       commonjs2: 'react',
//       commonjs: 'react',
//       amd: 'react'
//     },
//     'prop-types': {
//       root: 'PropTypes',
//       commonjs: 'prop-types',
//       commonjs2: 'prop-types',
//       amd: 'prop-types'
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['es2015', 'react', 'stage-0']
//         }
//       }
//     ]
//   },
//   // plugins: [
//   //   new webpack.optimize.UglifyJsPlugin({
//   //     comments: false
//   //   }),
//   //   new webpack.DefinePlugin({
//   //     'process.env': {
//   //       NODE_ENV: JSON.stringify('production')
//   //     }
//   //   })
//   // ]
// }

// module.exports = config
