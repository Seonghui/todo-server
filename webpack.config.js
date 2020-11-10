require('dotenv-flow').config({
  node_env: process.env.NODE_ENV,
});

const path = require('path');
const { WEBPACK_MODE } = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: WEBPACK_MODE,
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
