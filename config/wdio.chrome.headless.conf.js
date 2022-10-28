const { config } = require('./wdio.conf');

const chromeHeadlessConfig = {
    ...config,
    services: [['chromedriver', { chrome: 'latest' }]], // https://chromedriver.chromium.org/
    //services: ['docker', 'selenium-standalone'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--window-size=1440,735'], // '--no-sandbox', '--disable-infobars', '--disable-gpu',
            },
        },
    ],
};

exports.config = chromeHeadlessConfig;
