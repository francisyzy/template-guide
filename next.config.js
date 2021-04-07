const webpack = require("webpack");

module.exports = {
  basePath: "/template-guide",
  assetPrefix: "/template-guide/",
  // webpack: (config) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       "process.env.ASSET_PREFIX": JSON.stringify('template-guide'),
  //     })
  //   );

  //   return config;
  // },
};
