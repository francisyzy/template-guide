const webpack = require("webpack");

module.exports = {
  basePath: "/emtrac2-guide",
  assetPrefix: "emtrac2-guide",
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify('emtrac2-guide'),
      })
    );

    return config;
  },
};
