module.exports = {
  lintOnSave: false,
  // devServer: {
  //   host: 'localhost'
  // },
  pwa: {
    manifestOptions: {
      background_color: 'green'
    },
    name: 'Mini Meme',
    themeColor: 'steelblue',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.imgflip.com/get_memes'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.chucknorris.io/jokes/random'
        }
      ]
    }
  }
}
