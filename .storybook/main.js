const path = require('path');
module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, '@'), 'node_modules'],
    assets: [path.resolve(__dirname, '..'), '/src']
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },);

    return config;
  },
}