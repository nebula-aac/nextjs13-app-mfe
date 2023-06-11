const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
    const location = isServer ? "ssr" : "chunks"
    return {
        form: `form@http://localhost:3005/_next/static/${location}/remoteEntry.js`,
        widget: `widget@http://localhost:3004/_next/static/${location}/remoteEntry.js`,
        docs: `docs@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
        shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
        home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        checkout: `checkout@http://localhost:3000/_next/static/${location}/remoteEntry.js`
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        const { isServer } = options
        config.experiments = { layers: true, topLevelAwait: true }
        config.devtool = 'eval-source-map'
        config.plugins.push(
            new NextFederationPlugin({
                name: 'widget',
                remotes: remotes(options.isServer),
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './button': './components/button/button.tsx'
                },
                extraOptions: {
                    verbose: true,
                }
            })
        )
        return config
    }
}

module.exports = nextConfig
