const config = require('./src/config');

module.exports = {
  devServer: {
    port: config.PORT
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/mini-vexere/' : '/'
};
