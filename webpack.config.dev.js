const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
};
