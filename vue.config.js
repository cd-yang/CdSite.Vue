module.exports = {
    // // 基本路径
    // baseUrl: "/",
    // 输出文件目录
    outputDir: "dist",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
      // 是否使用css分离插件 ExtractTextPlugin
      extract: true,
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {
        less:{
          lessOptions: {
            javascriptEnabled: true
          }
        }
      },
        // 启用 CSS modules for all css / pre-processor files.
      requireModuleExtension: true
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require("os").cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
      open: true, //配置自动启动浏览器
      host: "127.0.0.1",//主机
      port: 8080, // 端口号自定义
      https: false,//是否开启https安全协议
      hotOnly: false, // https:{type:Boolean}
      proxy: {
        // 配置多个代理
        "/api": {//定义代理名称
          target: "https://localhost:5001",//我们的接口域名地址
          ws: true,
          changeOrigin: true,//允许跨域
          pathRewrite: {
            // 路径重写，
            "^/apb": "" // 替换target中的请求地址，（这里无效，但是可以自定义处理）
          }
        }
      }, // 设置代理
  
      before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
      // ...
    }
  };