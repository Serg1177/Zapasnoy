const logWebpackConfigPlugin = require("./craco-plugin-webpack-config");


module.exports = async function({ env }) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Build webpack');
            resolve();
        })
    })

    return  {
        plugins: [
            { plugin: logWebpackConfigPlugin, options: { preText: "Will log the webpack config:" } }
        ]
    };
}
