const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

const server = {
  entry: [
    './src/server/server.ts',
    './src/server/app/main/main.service.ts',
    './src/server/app/contacts/contacts.service.ts',
    './src/server/app/settings/settings.service.ts',
    './src/server/app/entreprise/entreprise.service.ts',
    './src/server/app/call/call.service.ts',
    './src/server/app/messages/messages.service.ts',
    './src/server/app/vehicle/vehicle.service.ts',
    './src/server/app/newsEnterprise/news-enterprise.service.ts',
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
    new ESLintPlugin({ exclude: ['/node_modules/'] }),
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'server')],
      },
      watch: {
        include: [path.resolve(buildPath, 'server')],
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].server.js',
    path: path.resolve(buildPath, 'server'),
  },
  target: 'node',
};

const client = {
  entry: [
    './src/client/client.ts',
    './src/client/app/main/main.service.ts',
    './src/client/app/contacts/contacts.service.ts',
    './src/client/app/settings/settings.service.ts',
    './src/client/app/bank/bank.service.ts',
    './src/client/app/health/health.service.ts',
    './src/client/app/entreprise/entreprise.service.ts',
    './src/client/app/call/call.service.ts',
    './src/client/app/messages/messages.service.ts',
    './src/client/app/vehicle/vehicle.service.ts',
    './src/client/app/take_photo/take_photo.service.ts',
    './src/client/app/newsEnterprise/news-enterprise.service.ts',
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'client')],
      },
      watch: {
        include: [path.resolve(buildPath, 'client')],
      },
    }),
    new ESLintPlugin({ exclude: ['/node_modules/'] }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].client.js',
    path: path.resolve(buildPath, 'client'),
  },
};

const shared = {
  entry: './src/shared/config.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'shared')],
      },
      watch: {
        include: [path.resolve(buildPath, 'shared')],
      },
    }),
    new ESLintPlugin({ exclude: ['/node_modules/'] }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].shared.js',
    path: path.resolve(buildPath, 'shared'),
  },
};

module.exports = [server, client, shared];
