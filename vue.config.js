const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  pluginOptions: {
    vuetify: {
      // 'https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader'
    },
  },

  pwa: {
    name: 'Web AM',
    themeColor: '#6368D9',
    msTileColor: '#6368D9',
    manifestOptions: {
      background_color: '#6368D9',
    },
    iconPaths: {
      faviconSVG: 'img/icons/LOGO.png',
    },
  },
});
