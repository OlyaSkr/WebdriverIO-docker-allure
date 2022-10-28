const loginPage = require('../pageobjects/login.page');

describe('Login form for telnyx page', () => {

    beforeEach('Goes to main url and deny cookies', async () => {
        await loginPage.open('https://telnyx.com');
        await loginPage.denyCookiesClick();
        await loginPage.loginLinkClick();
    }); 
    it('Verify log in with wrong credentials', async () => {
        await loginPage.login("test@gmail.com", "7856Er45#jhkkgh");
        await loginPage.errorMessageIsDisplayed();
    });
    it('Verify the forgot password function', async () => {
        await loginPage.forgotPasswordClick();
        await loginPage.emailInputSetValue('useraccounnt@gmail.com');
        await loginPage.resetPaaswordButtonClick();
        await loginPage.informMessageIsDisplayed();
    });
    it('Verify log in with empty password field', async () => {
        await loginPage.login('useraccounnt@gmail.com');
        await loginPage.requiredTextIsDisplayed();
    });
    it('Verify log in with empty email field', async () => {
        await loginPage.login('', '45rtfg*Jvbnmv');
        await loginPage.requiredTextIsDisplayed();
    });
    it('Verify log in with correct credentials', async () => {
        await loginPage.login('unew91282@gmail.com', '45W$ab235678');
        await browser.pause(3000);
        await expect(browser).toHaveTitle('Telnyx Customer Portal');
        await loginPage.homeLinkisDisplayed();
    });
});
