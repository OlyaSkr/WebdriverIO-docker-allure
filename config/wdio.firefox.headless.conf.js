const { config } = require('./wdio.conf');

const firefoxHeadlessConfig = {  
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]], // https://chromedriver.chromium.org/
    //services: ['geckodriver', 'docker', 'firefox-profile'],
    capabilities: [    
        {      
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--headless', '--window-size=1366,768'] //'--start-maximized', '--no-sandbox', '--disable-gpu', '--allow-insecure-localhost'
            }, 
        },  
    ],  
};

exports.config = firefoxHeadlessConfig;