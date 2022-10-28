# WebdriwerIO e2e-tests with docker and allure report integration

## **This repository contains tests written in WebdriverIO js to test the site https://telnyx.com/ Contains of:**

-   Page Object Model  
-   Separate configs for chrome and firefox browsers
-   npm scripts to run all tests, single file, run tests with chrome browser and firefox browser
-   Docker integration
-   Allure report integration

---

**devDependencies:**

- @wdio/allure-reporter: 7.25.2
- @wdio/cli: 7.25.2
- @wdio/firefox-profile-service: 7.25.1
- @wdio/local-runner: 7.25.2
- @wdio/mocha-framework: 7.25.2
- @wdio/selenium-standalone-service: 7.25.1
- @wdio/spec-reporter: 7.25.1
- allure-commandline: 2.18.1
- chai: 4.3.6
- chromedriver: 106.0.1
- cross-env: 7.0.3
- wdio-chromedriver-service: 8.0.0
- wdio-docker-service: 3.2.1
---

## **Steps to run with docker**

-   Clone the repository using "git clone"
-   Install docker desktop
-   docker-compose -f docker-compose.yml up
-   npm run test
  
#### To stop the execution, hit Ctrl+C, and the

-   docker-compose -f docker-compose.yml down

---

## **Script to allure report generate and open**

- npm run allure-report-generate
- npm run allure-report-open

