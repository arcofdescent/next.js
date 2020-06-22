module.exports = {
  target: 'serverless',
  experimental: {
    optionalCatchAll: true,
    rewrites() {
      return [
        {
          source: '/about',
          destination: '/lang/en/about',
        },
      ]
    },
  },
}
