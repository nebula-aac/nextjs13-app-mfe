const webpack = require('webpack')
const MfWrapperPlugin = require('./src/plugins/MfWrapperPlugin')

const env = process.env.NODE_ENV

module.exports = {
    mode: env === 'production' || env === 'none' ? env : 'development',
    entry: './src/plugins/MfWrapperPlugin.js',
    plugins: [
        new MfWrapperPlugin()
    ]
}