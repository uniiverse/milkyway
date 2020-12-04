module.exports = {
  entry: './webpack.index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-react-loader'
        },
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
