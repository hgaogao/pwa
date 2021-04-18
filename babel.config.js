module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 设置vant自动引入
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
}
