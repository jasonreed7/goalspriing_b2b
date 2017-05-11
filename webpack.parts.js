const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.inspectLoader = {
  loader: 'inspect-loader',
  options: {
    callback(inspect) {
      console.log(inspect.arguments);
    },
  },
};

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',

        loader: 'eslint-loader',
        options,
      },
    ],
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,

        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

exports.loadSCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,

        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
      },
    ],
  },
});

exports.extractCSS = ({ include, exclude, use }) => {
  const plugin = new ExtractTextPlugin({
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.scss$/,
          include, 
          exclude,
          use: plugin.extract({
            //use: use.concat(['resolve-url-loader', 'sass-loader?sourceMap']),
            use: ['css-loader', exports.autoprefix(), 'resolve-url-loader' ,'sass-loader?sourceMap'],
            fallback: 'style-loader',
          })
        }
      ],
    },
    plugins: [ plugin ]
  };

};

// exports.autoprefix = () => ({
//   loader: 'postcss-loader',
//   options: {
//     plugins: () => ([
//       require('autoprefixer'), require('postcss-focus')
//     ]),
//   },
// });

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: [require('autoprefixer'), require('postcss-focus')], 
  },
});

// exports.lintSCSS = ({ include, exclude }) => ({
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         include,
//         exclude,
//         enforce: 'pre',
//         loader: 'postcss-loader',
//         options: {
//           syntax: require('postcss-scss'),
//           plugins: () => ([
//             require('stylelint')({
//               ignoreFiles: 'node_modules/**/*.scss'
//             }),
//           ]),
//         },
//       },
//     ],
//   },
// });

exports.lintSCSS = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'postcss-loader',
        options: {
          syntax: require('postcss-scss'),
          plugins: function() { return [ require('stylelint')({ignoreFiles: 'node_modules/**/*.scss'}) ]; } 
        },
      },
    ],
  },
});