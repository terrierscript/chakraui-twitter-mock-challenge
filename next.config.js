module.exports = {
  future: {
    webpack5: true,
  },
  webpackDevMiddleware: config => {
    config.lazy = true;
    return config;
  },
}