const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        mytheme: path.resolve(__dirname, '../src/theme'),
        '~components': path.resolve(
          __dirname,
          './src/gatsby-theme-docz/components'
        ),
        '~theme': path.resolve(__dirname, './src/gatsby-theme-docz/theme'),
        '~utils': path.resolve(__dirname, './src/gatsby-theme-docz/utils')
      }
    }
  });
};
