const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks"
  return {
    checkout: `checkout@https://nextjs13-app-mfe.vercel.app/_next/static/${location}/remoteEntry.js`,
    home: `home@https://nextjs13-app-mfe-so6z.vercel.app/_next/static/${location}/remoteEntry.js`,
    shop: `shop@https://nextjs13-app-mfe-7veq.vercel.app/_next/static/${location}/remoteEntry.js`,
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
