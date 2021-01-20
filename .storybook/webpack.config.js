module.exports = async ({ config }) => {
  config.resolve.extensions.push('.svg');

  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test( String( data.test ) )) data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
    return data;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: [{ loader: require.resolve('svg-react-loader') }]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
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
      'sass-loader',
    ],
  });

  return config;
};
