const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  chainWebpack: config => {

    // 为src下文件配别名，不使用相对路径
    config.resolve.alias
      .set('@', resolve('src'))
  },
}