const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = () => ({ //elementy konfiguracji, które są wspólne dla wersji developerskiej i produkcyjnej.
  entry: './src/index.js',//główny kod aplikacji.
  output: {  //wskazuje miejsce, w którym ma być wygenerowana wersja produkcyjna, 
    //stworzona za pomocą komendy npm run build. Jest też odpowiedzialny za nazwę pliku, w którym znajdzie się scalony i skonwertowany kod JS naszej aplikacji.
    path: path.join(__dirname, 'dist'),
    filename: 'scripts_bundle.js',
  },
  module: { //zawiera konfigurację dla różnych typów plików.
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }, 
  plugins: [  //lista wtyczek webpacka, które są niezbędne w naszej aplikacji.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

const devConfig = () => ({//dotyczą wyłącznie wersji developerskiej.
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  },
});

const prodConfig = () => ({//dotyczące wersji produkcyjnej.
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};