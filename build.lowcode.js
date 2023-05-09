module.exports = {
  alias: {
    '@': './src',
    lowcode: './src/lowcode'
  },
  plugins: [
    [
      "@alifd/build-plugin-lowcode",
      {
        engineScope: '@alilc',
      }
    ]
  ],
};