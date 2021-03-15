const webpack = require("webpack");

module.exports = {
  basePath: "/mtrac-guide",
  assetPrefix: "/mtrac-guide/",
  // webpack: (config) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       "process.env.ASSET_PREFIX": JSON.stringify('mtrac-guide'),
  //     })
  //   );

  //   return config;
  // },
};
