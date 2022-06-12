const path = require('path');

module.exports = {
    overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
        if (pluginOptions.preText) {
            console.log(pluginOptions.preText);
        }

        // Always return the config object.
        return {
            ...webpackConfig,
            resolve: {
                alias: {
                    '~': path.resolve(__dirname, 'src/'),
                },
                extensions: ['.ts', '.tsx', '.js', '.json'],
                modules: [
                    path.resolve('node_modules'),
                    path.resolve('src'),
                ],
                fallback: {
                    'net': false,
                },
            },
        };
    }
};

