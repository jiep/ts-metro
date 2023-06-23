module.exports = {
  pwa: {
    themeColor: '#2563eb',
    msTileColor: '#2563eb',
    iconPaths: {
      faviconSVG: null,
      favicon32: 'img/icons/favicon.ico',
      favicon16: 'img/icons/favicon.ico',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/icon-192-maskable.png',
      maskIcon512: 'img/icons/icon-512-maskable.png',
      msTileImage: null
    }
    // workboxPluginMode: "GenerateSW",
    // workboxOptions: {
    //   navigateFallback: "/index.html",
    //   runtimeCaching: [{
    //     urlPattern: new RegExp('.'),
    //     handler: 'NetworkFirst,',
    //     options: {
    //       networkTimeoutSeconds: 20,
    //       cacheName: 'cache',
    //       cacheableResponse: {
    //         statuses: [200],
    //       },
    //     },
    //   }]
    // }
  }
}
