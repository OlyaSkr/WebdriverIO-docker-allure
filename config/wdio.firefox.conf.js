const { config } = require('../config/wdio.conf');

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', { firefox: 'latest' }]], // https://chromedriver.chromium.org/
    //services: ['firefox-profile'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--window-size=1440,900'],
            },
        },
    ],
};

exports.config = firefoxConfig;
