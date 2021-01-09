const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'development',
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
  optimization: {
    minimize: true,
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
