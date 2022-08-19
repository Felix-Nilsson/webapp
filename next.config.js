module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config
  }
}
