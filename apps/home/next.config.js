const deps = require('../package.json').dependencies;
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks"
  return {
    widget: `widget@http://localhost:3004/_next/static/${location}/remoteEntry.js`,
    docs: `docs@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
    // shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    shop: `shop@https://nextjs13-app-mfe-7veq.vercel.app/_next/static/${location}/remoteEntry.js`,
    // home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    home: `home@https://nextjs13-app-mfe-so6z.vercel.app/_next/static/${location}/remoteEntry.js`,
    // checkout: `checkout@http://localhost:3000/_next/static/${location}/remoteEntry.js`
    checkout: `checkout@https://nextjs13-app-mfe.vercel.app/_next/static/${location}/remoteEntry.js`,
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
        name: 'home',
        remotes: remotes(options.isServer),
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './nav': './components/sections/header/header.tsx'
        },
        shared: {
          '@chakra-ui/react': {
            singleton: true,
            requiredVersion: deps['@chakra-ui/react']
          },
          '@chakra-ui/next-js': {
            singleton: true,
            requiredVersion: deps['@chakra-ui/next-js']
          },
          '@emotion/react': {
            singleton: true,
            requiredVersion: deps['@emotion/react']
          },
          '@emotion/styled': {
            singleton: true,
            requiredVersion: deps['@emotion/styled']
          },
          'framer-motion': {
            singleton: true,
            requiredVersion: deps['framer-motion']
          }
        }
      })
    )
    return config
  }
}

module.exports = nextConfig
