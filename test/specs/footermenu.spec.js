const expectChai = require('chai').expect;
const footerPage = require('../pageobjects/footer.page');

describe('Verify the menu on the footer page', () => {
    beforeEach('Goes to main url and deny cookies', async () => {
        await footerPage.open('https://telnyx.com');
        await footerPage.denyCookiesClick();
    });
    it('Verify that Products menu is available', async () => {
        await footerPage.productsLabelscrollIntoView();
        const productsMenu = await footerPage.productsCategoryListText();
        console.log(productsMenu);
        expectChai(productsMenu).to.deep.equal(footerPage.productsMenuList);
    });
    it('Verify that Resources menu is available', async () => {
        await footerPage.resourcesLabelscrollIntoView();
        const resourcesMenu = await footerPage.resourcesCategoryListText();
        console.log(resourcesMenu);
        expectChai(resourcesMenu).to.deep.equal(footerPage.resourcesMenuList);
    });
    it('Verify that Pricing menu is available', async () => {
        await footerPage.pricingLabelscrollIntoView();
        const pricingMenu = await footerPage.pricingCategoryListText();
        console.log(pricingMenu);
        expectChai(pricingMenu).to.deep.equal(footerPage.pricingMenuList);
    });
    it('Verify that Company menu is available', async () => {
        await footerPage.pricingLabelscrollIntoView();
        const companyMenu = await footerPage.companyCategoryListText();
        console.log(companyMenu);
        expectChai(companyMenu).to.deep.equal(footerPage.companyMenuList);
    });
    it('Verify that Mission Control menu is available', async () => {
        await footerPage.missionControlLabelscrollIntoView();
        const missionControlMenu = await footerPage.missionControlCategoryListText();
        console.log(missionControlMenu);
        expectChai(missionControlMenu).to.deep.equal(footerPage.missionControlMenuList);
    });
});
