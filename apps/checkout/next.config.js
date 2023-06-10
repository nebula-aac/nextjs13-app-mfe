const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks"
  return {
    home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options
    config.experiments = { layers: true, topLevelAwait: true }
    config.devtool = 'eval-source-map'
    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkout',
        remotes: remotes(options.isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './title': './components/exposedTitle.tsx'
        }
      })
    )
    return config
  }
}

module.exports = nextConfig
