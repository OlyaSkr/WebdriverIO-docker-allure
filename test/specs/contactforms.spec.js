const contactPage = require('../pageobjects/contactforms.page');

describe('Verify that Telnyx page contact forms are available for users', () => {
    beforeEach('Goes to main url and deny cookies', async () => {
        await contactPage.open('https://telnyx.com')
        await contactPage.denyCookiesClick();
    });
    it('Verify that Call us button is available for users', async () => {
        await contactPage.callUsButtonClick();
        await contactPage.talkToExpertLabelisDisplayed();
        await expect(contactPage.talkToExpertLabel).toHaveText('Talk to an Expert');
    });
    it('Verify Support Center link is available for users', async () => {
        await contactPage.supportCenterButtonClick();
        await expect(contactPage.supportCenterLabel).toHaveText('Support Center');
        await expect(browser).toHaveTitle('Telnyx Support');
    });
    it('Verify Talk to an expert button is available for users', async () => {
        await contactPage.talkToExpertButtonClick();
        await expect(contactPage.talkToProductsExperts).toHaveTextContaining('sales@telnyx.com');
        await expect(browser).toHaveTitle('Contact a member of the Telnyx sales team');
    });
});
