// 使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle
const config = {
  // webpack --mode=production
  entry: {
    index: './es6-pages/index',
  },
  output: {
    filename: '[name]/[name].js',
    path: __dirname + '/pages'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      // exclude: /node_modules/,
      options: {
        presets: ['es2015']
      }
    }]
  }
};

module.exports = config