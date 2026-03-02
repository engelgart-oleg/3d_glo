// мои настройки webpack
const { watch } = require('fs');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'), // путь к папке разработки src
  entry: './index.js', // путь к точке входа ./src/index.js  
  output: { // объект куда помещается путь и имя исходящего файла
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist') // указываем абсолютный путь. __dirname является корневым каталогом проекта
  },
  devServer: {
    hot: true, // горячая перезагрузка страниц
    static: {
      directory: './dist',
      watch: true
    }
  }
}