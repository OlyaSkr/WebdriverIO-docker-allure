const pricingPage = require('../pageobjects/pricing.page');
describe('Verify the Pricing drop menu on the header page', () => {
    beforeEach('Goes to main url and deny cookies', async () => {
        await pricingPage.open('https://telnyx.com');
        await pricingPage.denyCookiesClick();
        await pricingPage.pricingButtonMoveTo(pricingPage.pricingButton);
    });
    it('Verify that Elastic SIP Trunking link and Download SIP Trunking pricing are available in the Products drop menu', async () => {
        await pricingPage.elasticSipTrunkingLinkClick();
        await pricingPage.tryItFreeLinkScrollIntoView();
        await pricingPage.channelsCallsPerSecondClick();
        await pricingPage.firstNameInputSeValue('Piter');
        await pricingPage.lastNameInputSeValue('Nord');
        await pricingPage.emailInputSeValue('usercompany@gmail.com');
        await pricingPage.downloadCsvButtonClick();
        await pricingPage.informMessageIsDisplayed();
        await expect(browser).toHaveTitle('Pricing for Elastic SIP Trunking');
    });
    it('Verify that Voice API link and Calculate your savings are available in the Products drop menu', async () => {
        await pricingPage.voiceApiLinkClick();
        await pricingPage.calculateYourSavingsLinkClick();
        await pricingPage.messagingApiCheckboxScrollIntoView();
        await pricingPage.messagingApiCheckboxClick();
        await pricingPage.continieButtonClick();
        await pricingPage.continieButtonClick();
        await expect(browser).toHaveTitle('Twilio Price Calculator - Voice & SMS API + SIP Trunks');
    });
    it('Verify that SMS API link is available in the Products drop menu', async () => {
        await pricingPage.smsApiLinkClick();
        await pricingPage.tryItFreeLinkScrollIntoView();
        await pricingPage.moreAboutSmsApiLinkScrollIntoView();
        await pricingPage.moreAboutSmsApiLinkClick();
        await expect(browser).toHaveTitle('SMS API for Global Messaging | Telnyx');
    });
    it('Verify that Fax link is available in the Products drop menu', async () => {
        await pricingPage.faxLinkClick();
        await pricingPage.signUpAndStartBuildingLinkScroll();
        await pricingPage.signUpAndStartBuildingLinkClick();
        await pricingPage.createFreeAccountLabelIsDisplayed();
        await expect(browser).toHaveTitle('Sign Up | Telnyx');
    });
});
