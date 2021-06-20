const { resolve } = require('path')
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          // 注：loader是自下而上（从右到左）的执行链路
          use: [
            {
              loader: 'vue-loader'
            },
            {
              loader: resolve(__dirname, './src/loaders'),
              options: {}
            }
          ]
        }
      ]
    }
  }
}
