module.exports = function override(originalConfig) {
    //do stuff with the webpack config...
    originalConfig.externals = {
        'Config': getConfig()
    };
    return originalConfig;
};

function getConfig() {
    return JSON.stringify(require(getConfigPath()))
}

function getConfigPath() {
    switch (process.env.DEPLOYMENT) {
        case 'staging':
            return './config/deployment/staging.json';
        case 'production':
            return './config/deployment/production.json';
        default:
            return './config/default.json';
    }
}
