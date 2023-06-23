module.exports = {
  pwa: {
    themeColor: '#2563eb',
    msTileColor: '#2563eb',
    iconPaths: {
      faviconSVG: null,
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
