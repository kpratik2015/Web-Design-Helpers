const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~theme': path.resolve(__dirname, 'src/theme'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        components: path.resolve(__dirname, '../src/components')
      }
    }
  });
};
