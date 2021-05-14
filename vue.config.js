module.exports = {
  pwa: {
    themeColor: "#dc2626",
    msTileColor: "#dc2626",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: "/index.html",
      runtimeCaching: [{
        urlPattern: new RegExp('.'),
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 20,
          cacheName: 'cache',
          cacheableResponse: {
            statuses: [200],
          },
        },
      }]
    }
  }
};
