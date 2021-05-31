module.exports = {
  //配置pwa应用
  pwa: {
    name: 'Leepool',
    themeColor: '#2f4053',
    msTileColor: '#fff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      importWorkboxFrom: 'disabled',
      importScripts: 'https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js'
    },
    manifestOptions: {
      background_color: '#FFFFFF'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [] //填写公共文件路径
    }
  }
};