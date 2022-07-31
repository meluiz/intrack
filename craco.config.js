/* craco.config.js */
const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      '@asset': path.resolve(__dirname, 'src/assets'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/configs'),
      '@context': path.resolve(__dirname, 'src/contexts'),
      '@data': path.resolve(__dirname, 'src/datas'),
      '@hook': path.resolve(__dirname, 'src/hooks'),
      '@page': path.resolve(__dirname, 'src/pages'),
      '@service': path.resolve(__dirname, 'src/services'),
      '@util': path.resolve(__dirname, 'src/utils'),
    },
  },
}
