const { NormalModuleReplacementPlugin } = require('webpack');

class MfWrapperPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        const useClientModulePath = require.resolve('@module-federation/nextjs-mf/src/include-defaults.js');
        const useClientModule = require(useClientModulePath);

        compiler.hooks.afterResolvers.tap('MfWrapperPlugin', (compiler) => {
            new NormalModuleReplacementPlugin(
                /@module-federation\/nextjs-mf\/src\/include-defaults\.js/,
                (resource) => {
                    resource.request = useClientModulePath;
                    resource.userRequest = useClientModulePath;
                    resource.rawRequest = useClientModulePath;
                    resource.resource = useClientModulePath;
                    resource.context = useClientModulePath;
                    resource.loaders = [];
                    resource.parser = {
                        parse: () => ({
                            statements: [
                                { type: 'import', value: `import { useClient } from '@module-federation/nextjs-mf';` },
                                { type: 'call', value: 'useClient();' },
                                { type: 'call', value: 'export {};' },
                            ],
                        }),
                    };
                }
            ).apply(compiler);
        });

        compiler.hooks.done.tap('MfWrapperPlugin', () => {
            console.log(this.options?.message || 'Hello World!');
        });
    }
}

module.exports = MfWrapperPlugin;
