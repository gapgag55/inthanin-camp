const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
 
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader'}
        ]
      },
      { test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
      );
    return config;
  }
}