// wag-cli 公司内部项目
let path = require('path')
module.exports = {
  files: {
    'example/src/index.js': 1
  },
  publicPath: './',
  context: path.resolve(__dirname, '../'),
  index: 'example/index.html'
}