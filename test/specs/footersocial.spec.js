const footerPage = require('../pageobjects/footer.page');

describe('Verify that Telnyx page social links are available for users', () => {
    beforeEach('Goes to main url and deny cookies and scroll into footer of the page', async () => {
        await footerPage.open('https://telnyx.com');
        await footerPage.denyCookiesClick();
        await footerPage.socialLinkscrollIntoView();
    });
    it('Verify that Connect on LinkedIn link is available for users', async () => {
        await footerPage.connectLinkedInLinkClick();
        await expect(browser).toHaveTitle('Telnyx | Communication APIs for Seamless Connectivity');
    });
    it('Verify that Follow on Twitter link is available for users', async () => {
        await footerPage.followTwitterLinkClick();
        await expect(browser).toHaveTitle('Telnyx | Communication APIs for Seamless Connectivity');
    });
    it('Verify that Follow on Facebook link is available for users', async () => {
        await footerPage.followFacebookLinkClick();
        await expect(browser).toHaveTitle('Telnyx | Communication APIs for Seamless Connectivity');
    });
});
