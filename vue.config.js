const config = require('./src/config');

module.exports = {
  devServer: {
    port: config.PORT
  },
  publicPath: '/mini-vexere-frontend'
};
