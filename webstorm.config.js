/**
 * 由于 Vue CLI 3 不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名
 * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用
 * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
 * */

const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@components': resolve('src/components'),
      '@assets': resolve('src/assets'),
      '@scss': resolve('src/assets/scss'),
      '@data': resolve('src/data'),
      '@plugins': resolve('src/plugins'),
      '@': resolve('src')
    }
  }
}
