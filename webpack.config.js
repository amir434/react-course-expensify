const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';

    return {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: (resourcePath, context) => {
                      return path.relative(path.dirname(resourcePath), context) + '/';
                    },
                  },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
              ]
        }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
};
};
