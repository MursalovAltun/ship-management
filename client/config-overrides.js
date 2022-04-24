const {
  override,
  addWebpackAlias
} = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
     '@app': path.resolve(__dirname, './src/app'),
     '@core': path.resolve(__dirname, './src/core'),
     '@features': path.resolve(__dirname, './src/features'),
     '@components': path.resolve(__dirname, './src/components'),
     '@store': path.resolve(__dirname, './src/store'),
  }),
);
