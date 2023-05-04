const { defineConfig } = require('@vue/cli-service');
const { defineLowCodePluginOption } = require('@knxcloud/vue-cli-plugin-lowcode');

module.exports = defineConfig({
  transpileDependencies:true,
  css:{
    loaderOptions:{
      less:{
        lessOptions:{
          javascriptEnabled:true
        }
      }
    }
  },
  pluginOptions: {
    lowcode: defineLowCodePluginOption({}),
  },
});
