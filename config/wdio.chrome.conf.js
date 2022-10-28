const { config } = require('./wdio.conf');

const chromeConfig = {
    ...config,
    services: [['chromedriver', { chrome: 'latest' }]], // https://chromedriver.chromium.org/
    //services: ['selenium-standalone'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--window-size=1440,900'],
            },
        },
    ],
    path: '/',
};

exports.config = chromeConfig;
