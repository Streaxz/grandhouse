// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// // const IgnoreWarningsPlugin = require("./ignore-warnings-plugin");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  // Включение строгого режима React для выявления потенциальных проблем
  reactStrictMode: true,

  // Переменные окружения, доступные на клиенте и сервере
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // Транспиляция специфических пакетов с использованием Babel
  transpilePackages: ["@mdxeditor/editor"],

  // Конфигурация ESLint для игнорирования ошибок во время сборки
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Кастомизация Webpack
  webpack: (config) => {
    // Включение top-level await
    config.experiments = { ...config.experiments, topLevelAwait: true };

    // // Игнорирование специфических предупреждений
    // config.plugins.push(
    //   new IgnoreWarningsPlugin([/non-serializable cache item/]),
    // );

    // // Использование MiniCssExtractPlugin для извлечения CSS в продакшн
    // if (!isServer) {
    //   config.plugins.push(
    //     new MiniCssExtractPlugin({
    //       filename: "static/css/[name].[contenthash].css",
    //       chunkFilename: "static/css/[id].[contenthash].css",
    //     }),
    //   );
    // }
    // // Настройка файлового кэширования
    // config.cache = {
    //   type: "filesystem",
    //   cacheDirectory: path.resolve(__dirname, ".cache"),
    //   buildDependencies: {
    //     config: [__filename],
    //   },
    //   name: "next-pack-file-cache",
    // };

    return config;
  },
};

module.exports = nextConfig;
