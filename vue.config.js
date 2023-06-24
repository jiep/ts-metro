module.exports = {
  pwa: {
    themeColor: '#2563eb',
    msTileColor: '#2563eb',
    iconPaths: {
      faviconSVG: null,
      favicon16: null,
      favicon32: null,
      msTileImage: null
    },
    manifestOptions: {
      background_color: "#2563eb"
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
