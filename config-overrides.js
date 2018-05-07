const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    //The webpack config being used when compiling the app for dev or prod
    //Will pick up the service worker from the public folder and generate 
    //a new service worker with pre-cached assets using workbox-webpack-plugin
    webpack: function(config, env) {
        const workboxConfigProd = {
            swSrc: path.join(__dirname, 'public', 'service-worker.js'), 
            swDest: 'service-worker.js',
            importWorkboxFrom: 'disabled'
        };
        config = removeSWPrecachePlugin(config);
        if(env === 'production') {
            config.plugins.push(new workboxPlugin.InjectManifest(workboxConfigProd));
        }
        return config;
    },
    //The function used to create a webpack dev server config when running dev
    //Deleting the before function which was being used to create a no-op service worker
    devServer: function(configFunction) {
        return function(proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            delete config.before;
            return config;
        }
    }
}

function removeSWPrecachePlugin(config) {
    const swPrecachePluginIndex = config.plugins.findIndex((element) => {
        return element.constructor.name === 'SWPrecacheWebpackPlugin';
    });
    if(swPrecachePluginIndex !== -1) {
        config.plugins.splice(swPrecachePluginIndex, 1);
    }
    return config;
}