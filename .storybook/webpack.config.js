const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    test: /\.less$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          modules: true
        }
      },
      {
        loader: "less-loader"
      }
    ]
  });
  
  config.module.rules.push({
    test: /\.css$/,
    include: [path.resolve(__dirname, 'components/'), path.resolve(__dirname, 'node_modules/react-dates/lib/css')],
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
    ],
  });

  return config;
};
