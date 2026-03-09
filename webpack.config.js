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

/*
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'), // используй абсолютный путь
      watch: true
    }
  },
  // ДОБАВЬ ЭТУ СЕКЦИЮ:
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Позволяет импортировать CSS в JS
      },
    ],
  },
  mode: 'development' // Убедись, что режим указан
};
*/