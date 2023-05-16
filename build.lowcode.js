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
        buildInAssets:[
          {
            package: 'dayjs',
            version: '1.11.7',
            urls: ['https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js'],
            library: 'dayjs',
          },
          {
            package: 'lodash',
            library: '_',
            urls: ['https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'],
          },
          {
            package: 'iconfont-icons',
            urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
          },
          {
            package: '@ant-design/icons',
            version: '4.7.0',
            urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
            library: 'icons',
          },
          {
            package:"@ant-design/icons-vue",
            version:"6.1.0",
            urls: ['https://cdn.jsdelivr.net/npm/@ant-design/icons-vue@6.0.1/lib/index.js'],
            library: 'icons',
          },
          {
            package:"ant-design-vue",
            version:"3.2.19",
            urls:["https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.19/lib/index.js"],
            library:"ant-design-vue"
          }
        ]
      }
    ]
  ],
};
