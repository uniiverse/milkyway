const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './webpack.index.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'milkyway.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-react-loader'
        },
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'components/')],
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: '[local]-[hash:base64:5]',
              }
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'milkywayComponents',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  externals: {
    // Don't bundle react, react-dom, semantic-ui, semantic-ui-react
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'semantic-ui-react': {
      commonjs: 'semantic-ui-react',
      commonjs2: 'semantic-ui-react',
      amd: 'SemanticUIReact',
      root: 'SemanticUIReact',
    },
    'semantic-ui': {
      commonjs: 'semantic-ui',
      commonjs2: 'semantic-ui',
      amd: 'SemanticUI',
      root: 'SemanticUI',
    },
  },
};
