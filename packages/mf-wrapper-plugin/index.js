const { withModuleFederation } = require('@module-federation/nextjs-mf')

const mfWrapperPlugin = (nextConfig = {}) => {
    const { webpack } = nextConfig

    nextConfig.webpack = (config, options) => {
        const useClientDirective = `
        if (process.env.__MF_BUILD_ENV__ === 'client') {
            __webpack_require__('./src/include-defaults.js).useClient()
        }
        `

        config.module.rules.push({
            enforce: 'post',
            test: /include-defaults\.js$/,
            loader: 'string-replace-loader',
            options: {
                search: '__webpack_require__\\("(.*)"\\);',
                replace: `__webpack_require__("$1");${useClientDirective}`,
            },
        });

        config = withModuleFederation(config, options)

        return config
    }

    return nextConfig
}