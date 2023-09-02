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
      background_color: '#000000',
      icons: [
        // mengganti icin pada smarthphone
        {
          src: 'img/icons/LOGO.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    iconPaths: {
      // mengganti icin pada web dekstop
      faviconSVG: 'img/icons/LOGO.png',
      favicon16: 'img/icons/LOGO.png',
      favicon32: 'img/icons/LOGO.png',
    },
  },
});
